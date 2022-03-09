import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Head from "next/head"
import Link from "next/link"
import Script from "next/script"

import {
  faStar
} from "@fortawesome/free-solid-svg-icons"

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post - Nizar Baihaqi</title>
      </Head>
      <Script
        src="https:/connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <div>
        <h1>First Post</h1>
        <Link href="/">
          <a>Back &rarr;</a>
        </Link>
        <FontAwesomeIcon
          icon={faStar}
          style={{ fontSize: 100, color: "blue" }}
        />
      </div>
    </>
  )
}