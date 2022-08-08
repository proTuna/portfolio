import Layout from "../components/layout";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "../config";
import ProjectItem from "../components/projects/project-item";
const { Client } = require('@notionhq/client');

export default function Projcets({ projects }) {

    return(
        <Layout>
            <div className="flex flex-col items-center justify-center min-h-screen px-6 mb-10">
                <Head>
                    <title>포트폴리오</title>
                    <meta name="description" content="포트폴리오" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <h1 className="text-4xl font-bold sm:text-6xl">
                    총 프로젝트 : 
                    <span className="ps-4 text-blue-500"> {projects.results.length}</span>
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 py-10 m-6 gap-8">
                    {projects.results.map((aProject) => (
                        <ProjectItem key={aProject.id} data={aProject}/>
                    ))}
                </div>
            </div>
        </Layout>
    );
}

export async function getServerSideProps() {

    const options = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Notion-Version': '2022-02-22',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${TOKEN}`
        },
        body: JSON.stringify({
            sorts: [
                {
                    "property": "Name",
                    "direction": "ascending"
                }
            ],
            page_size: 100
        })
      };

    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)

    const projects = await res.json()

    // const projectNames = projects.results.map((aProject) =>(
    //     aProject.properties.Name.title[0].plain_text
    // ))

    // console.log(`projectNames : ${projectNames}`);

    // 06-28 버전에서는 데이터베이스에서 페이지를 조회해서 페이자마다 property 값들을 조회하는 쿼리를 날려야한다.
    // 추후 수정 예정
    // const notion = new Client({ auth: `${TOKEN}` });
    // const databaseId = `${DATABASE_ID}`;

    // const res = await notion.databases.retrieve({
    //     database_id: databaseId,
    // })
    // const projects = await res

    // console.log(projects);
    // const projectIds = projects.results.map((aProject)=> (
    //     aProject.properties.Name.title
    // ))

    // console.log(`projectIdsL: ${projectIds}`)

    return {
      props: {projects}, // will be passed to the page component as props
    }
  }