export default function Page({ params }) {
    // throw new Error("error xa")

    // fetch your blog post by its slug...
    let languages=["python","javascript","java","c++","c#"]
    if(languages.includes(params.slug)){
        return <div>My Post:{params.slug}</div>
    }
    else{
        return <div>Post not found</div>
    }
    return <div>My Post: {params.slug}</div>
  }
