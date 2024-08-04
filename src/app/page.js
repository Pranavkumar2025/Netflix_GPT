'use client'
import Login from "@/components/Login";
import appStore from "@/utils/appStore";
import { Provider } from "react-redux";
// import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Provider store={appStore}><Login/></Provider>
    </main>
  );
}
