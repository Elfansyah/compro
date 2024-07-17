import Blog1 from "./blog1";

export default async function FetchBlog(){
    const res = await fetch("https://cdn.contentful.com/spaces/7dof4j7xet92/environments/master/entries?access_token=dK5p83_1UONf5v7_FijO1HQZ4Z4vQx5VZty7zizzJBE")
    const data =await res.json()
    console.log(data.includes.Asset[0].fields.file.url);
    
    return(
        <div>
            <Blog1 title={data.items[2].fields.title} content={data.items[2].fields.content.content[0].content[0].value} imgSrc={data.includes.Asset[2].fields.file.url} />
            <Blog1 title={data.items[0].fields.title} content={data.items[0].fields.content.content[0].content[0].value} imgSrc={data.includes.Asset[1].fields.file.url} />
            <Blog1 title={data.items[1].fields.title} content={data.items[1].fields.content.content[0].content[0].value} imgSrc={data.includes.Asset[0].fields.file.url} />
        </div>
    )
}