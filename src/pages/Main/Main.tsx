import React from "react";
import { Layout } from "antd";
import WebView from "./components/WebView/WebView";
import "./components/PadViwe/style.css";
// import PadView from "./components/PadViwe/PadView";
import { useIsMobile } from "@/hooks/useIsMoblie";

const Main: React.FC = () => {
  const { isMobile } = useIsMobile();
  return (
    <Layout style={{ height: isMobile ? "100dvh" : "100%" }}>
      {isMobile ? (
        <Layout style={{ height: "100%" }}>
          {/* <PadView /> */}
        </Layout>
      ) : (
        <WebView />
      )}
    </Layout>
  );
};

export default Main;