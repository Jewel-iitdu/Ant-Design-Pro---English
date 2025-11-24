import { useModel } from '@umijs/max';
import { Radio, Space, Typography } from 'antd';
import React, { useCallback } from 'react';

const { Paragraph, Text } = Typography;

type ThemeMode = 'light' | 'dark';

const THEME_STORAGE_KEY = 'user-theme-mode';

const ThemeView: React.FC = () => {
  const { initialState, setInitialState } = useModel('@@initialState');

  const currentMode: ThemeMode =
    (initialState?.settings?.navTheme as ThemeMode) === 'realDark'
      ? 'dark'
      : 'light';

  const handleChange = useCallback(
    (e: any) => {
      const nextMode = e.target.value as ThemeMode;
      const navTheme = nextMode === 'dark' ? 'realDark' : 'light';

      // Persist for future sessions
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(THEME_STORAGE_KEY, nextMode);
      }

      // Update layout settings at runtime
      setInitialState((prev) => ({
        ...prev,
        settings: {
          ...prev?.settings,
          navTheme,
        },
      }));
    },
    [setInitialState],
  );

  return (
    <div>
      <Typography.Title level={4}>Theme</Typography.Title>
      <Paragraph>
        Choose your preferred appearance. This setting only affects your account
        on this browser.
      </Paragraph>
      <Space direction="vertical" size="large">
        <Radio.Group value={currentMode} onChange={handleChange}>
          <Radio.Button value="light">Light</Radio.Button>
          <Radio.Button value="dark">Dark</Radio.Button>
        </Radio.Group>
        <Text type="secondary">
          Dark mode uses the Pro Layout&apos;s built-in real dark theme.
        </Text>
      </Space>
    </div>
  );
};

export default ThemeView;


