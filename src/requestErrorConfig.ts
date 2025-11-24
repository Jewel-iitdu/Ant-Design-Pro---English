import type { RequestOptions } from '@@/plugin-request/request';
import type { RequestConfig } from '@umijs/max';
import { message, notification } from 'antd';

// Error handling strategy: error display type
enum ErrorShowType {
  SILENT = 0,
  WARN_MESSAGE = 1,
  ERROR_MESSAGE = 2,
  NOTIFICATION = 3,
  REDIRECT = 9,
}
// Response data format agreed with the backend
interface ResponseStructure {
  success: boolean;
  data: any;
  errorCode?: number;
  errorMessage?: string;
  showType?: ErrorShowType;
}

/**
 * @name Error handling
 * Built-in error handling for Pro; you can customize behavior here.
 * @doc https://umijs.org/docs/max/request#configuration
 */
export const errorConfig: RequestConfig = {
  // Error handling: umi@3 error handling solution.
  errorConfig: {
    // Throw error
    errorThrower: (res) => {
      const { success, data, errorCode, errorMessage, showType } =
        res as unknown as ResponseStructure;
      if (!success) {
        const error: any = new Error(errorMessage);
        error.name = 'BizError';
        error.info = { errorCode, errorMessage, showType, data };
        throw error; // Throw a custom error
      }
    },
    // Receive and handle errors
    errorHandler: (error: any, opts: any) => {
      if (opts?.skipErrorHandler) throw error;
      // Errors thrown by our errorThrower.
      if (error.name === 'BizError') {
        const errorInfo: ResponseStructure | undefined = error.info;
        if (errorInfo) {
          const { errorMessage, errorCode } = errorInfo;
          switch (errorInfo.showType) {
            case ErrorShowType.SILENT:
              // do nothing
              break;
            case ErrorShowType.WARN_MESSAGE:
              message.warning(errorMessage);
              break;
            case ErrorShowType.ERROR_MESSAGE:
              message.error(errorMessage);
              break;
            case ErrorShowType.NOTIFICATION:
              notification.open({
                description: errorMessage,
                message: errorCode,
              });
              break;
            case ErrorShowType.REDIRECT:
              // TODO: redirect
              break;
            default:
              message.error(errorMessage);
          }
        }
      } else if (error.response) {
        // Axios error: the request was sent and the server responded,
        // but the status code is outside the 2xx range
        message.error(`Response status:${error.response.status}`);
      } else if (error.request) {
        // Request was sent but no response was received.
        // In the browser, `error.request` is an instance of XMLHttpRequest;
        // in node.js, it is an instance of http.ClientRequest.
        message.error('None response! Please retry.');
      } else {
        // Something went wrong when sending the request
        message.error('Request error, please retry.');
      }
    },
  },

  // Request interceptors
  requestInterceptors: [
    (config: RequestOptions) => {
      // Intercept request config for customization.
      const url = config?.url?.concat('?token=123');
      return { ...config, url };
    },
  ],

  // Response interceptors
  responseInterceptors: [
    (response) => {
      // Intercept response data for customization
      const { data } = response as unknown as ResponseStructure;

      if (data?.success === false) {
        message.error('Request failed!');
      }
      return response;
    },
  ],
};
