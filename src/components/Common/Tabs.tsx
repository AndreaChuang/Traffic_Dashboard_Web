import { Tabs, TabsProps } from 'antd';

const BaseTabs = ({
  items,
  defaultActiveKey,
  activeKey,
  onChange,
  type = 'line',
  centered = false,
  className = '',
}: TabsProps) => {
  return (
    <Tabs
      items={items}
      defaultActiveKey={defaultActiveKey}
      activeKey={activeKey}
      onChange={onChange}
      type={type}
      centered={centered}
      className={className}
    />
  );
};

export default BaseTabs;