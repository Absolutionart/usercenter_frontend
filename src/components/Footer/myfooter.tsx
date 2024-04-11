import { CopyrightOutlined } from "@ant-design/icons";
import { Space, Divider } from "antd";

const MyFooter: React.FC = () => {
  return (
    <>
      <div style={{ textAlign: 'center', marginBottom: 8 }}>
        <Space split={<Divider type="vertical" />}>
          <a href="https://beian.miit.gov.cn/" rel="noreferrer" target="_blank" style={{color: '#666'}}>
            鄂ICP备2024048786号
          </a>
          <div>
            <img src="/icons/beian.png" width={20}/>
            <a
              href="https://beian.mps.gov.cn/#/query/webSearch?code=42098202000143"
              rel="noreferrer"
              target="_blank"
              style={{marginLeft:8, color: '#666'}}
            >
              鄂公网安备42098202000143
            </a>
          </div>
        </Space>
      </div>
      <div style={{ textAlign: 'center', marginBottom: 24, color: 'rgba(0, 0, 0, 0.45)' }}>
        Copyright <CopyrightOutlined /> {new Date().getFullYear()} 旺仔喝哇哈哈出品
      </div>
    </>
  );
};
export default MyFooter;