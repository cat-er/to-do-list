import Layout from "./view/Layout/Layout";
import enUS from "antd/locale/en_US";
import zhCN from "antd/locale/zh_CN";
import type { ConfigProviderProps } from "antd";
import { ConfigProvider } from "antd";
import { useChangeLng } from "@/i18n/hooks/useChangeLng";
import { I18nEnum } from "@/i18n/enums/index";

type Locale = ConfigProviderProps["locale"];

function App() {
  const [locale, setLocal] = useState<Locale>(zhCN);
  const { language } = useChangeLng();

  const changeAntLng = () => {
    if (language === I18nEnum.CN) {
      setLocal(zhCN);
    } else {
      setLocal(enUS);
    }
  };

  useEffect(() => {
    changeAntLng()
  }, [language]);

  return (
    <ConfigProvider locale={locale}>
      <Layout />
    </ConfigProvider>
  );
}

export default App;
