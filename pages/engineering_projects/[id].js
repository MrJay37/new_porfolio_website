import Layout from '../../components/layout'
import ProjectData from '../../static/projects_data'

export async function getStaticPaths() {    
    const paths = ProjectData.map(project =>  { return {'params': {'id': project.id}}})
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const project_data = JSON.stringify(ProjectData.filter(x => x.id === params.id)[0])

    return {
        props: {
            project_data: JSON.parse(project_data)
        }
    }
}

export default function Project({ project_data }) {
    return <Layout title={`Sanket Jain | Projects | ${project_data.title}`}>

    </Layout>
}