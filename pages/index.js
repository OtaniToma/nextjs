import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Irure est qui dolor occaecat dolore cupidatat commodo aute non culpa exercitation ea nostrud. Dolore ea cupidatat consequat ex ut culpa pariatur laborum dolor reprehenderit. Dolor qui qui exercitation mollit cupidatat dolore proident esse eu reprehenderit ad. Et minim laboris aliqua deserunt aliqua amet aute. Proident do consectetur laborum consequat. Fugiat consequat non consectetur irure in proident anim est incididunt excepteur non exercitation. Sint dolore laborum nisi deserunt ullamco adipisicing non laboris elit amet.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}