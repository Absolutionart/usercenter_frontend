import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';

const Footer: React.FC = () => {
  const defaultMessage = '旺仔喝哇哈哈出品';

  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        // {
        //   key: 'github',
        //   title: <GithubOutlined />,
        //   href: 'https://github.com/ant-design/ant-design-pro',
        //   blankTarget: true,
        // },
        {
          key: '鄂ICP备2024048786号',
          title: '鄂ICP备2024048786号',
          href: 'https://beian.miit.gov.cn/',
          blankTarget: true,
        },
        {
          key: '',
          title: <img src='/icons/beian.png' width={20}/>,
          href: 'https://beian.mps.gov.cn/#/query/webSearch?code=42098202000143',
          blankTarget: true,
        },
        {
          key: '鄂公网安备42098202000143',
          title: '鄂公网安备42098202000143',
          href: 'https://beian.mps.gov.cn/#/query/webSearch?code=42098202000143',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
