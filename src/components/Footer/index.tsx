import { BugOutlined, GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';

import { Tooltip } from 'antd';

const Footer: React.FC = () => {
  const defaultMessage = '旺仔喝哇哈哈出品';

  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        // {
        //   key: 'github',
        //   title: (
        //     <Tooltip title="prompt text">
        //       <BugOutlined />  产品反馈
        //     </Tooltip>
        //   ),
        //   href: 'https://support.qq.com/products/370820?',
        //   blankTarget: true,
        // },
        {
          key: 'ICP备案号',
          title: <Tooltip title="鄂ICP备2024048786号-1">鄂ICP备2024048786号-1</Tooltip>,
          href: 'https://beian.miit.gov.cn/',
          blankTarget: true,
        },
        {
          key: '公安备案号',
          title: (
            <Tooltip title="鄂公网安备42098202000143">
              <img src="/icons/beian.png" width={20} /> 鄂公网安备42098202000143
            </Tooltip>
          ),
          href: 'https://beian.mps.gov.cn/#/query/webSearch?code=42098202000143',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
