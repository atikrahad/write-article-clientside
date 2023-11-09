import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Authinfo } from "../Shared-Component/Authprovider";
import axios from "axios";

const Blogdetails = () => {
  const { result } = useLoaderData();
  const { userinfo } = useContext(Authinfo);
  const [comments, setComments] = useState([]);

  const {
    title,
    img,
    category,
    _id,
    pic,
    email,
    currentdate,
    name,
    sort_description,
    description,
  } = result;
  const blogId = _id;
  const authorpic = userinfo.pic;
  const authorname = userinfo.name;

  const handleComment = (e) => {
    e.preventDefault();
    const form = e.target;
    const comment = form.comment.value;
    const commentdata = { blogId, authorname, authorpic, comment };
    form.reset()
    axios
      .post("https://blogsite-server-1psfon91z-atikrahad1-gmailcom.vercel.app/comment", commentdata)
      .then((res) => console.log(res));
  };

  useEffect(() => {
    axios
      .get(`https://blogsite-server-1psfon91z-atikrahad1-gmailcom.vercel.app/comment?id=${blogId}`)
      .then((res) => setComments(res.data));
  }, [blogId]);

  return (
    <div className="max-w-7xl py-10 mx-auto">
      <div className="flex gap-3 py-3 items-center justify-start">
        <img src={pic} className="w-10 rounded-full" alt="" />
        <div>
          <h1 className="text-2xl">{name}</h1>
          <div className="flex gap-3 items-center">
            <p className="bg-green-500 rounded-md text-white px-2">
              {category}
            </p>
            <p>{currentdate.split()[0].slice(0, 10)}</p>
          </div>
        </div>
      </div>
      <img src={img} className="w-full rounded-md" alt="" />
      <h1 className="text-3xl py-5 font-bold">{title}</h1>
      <h2 className="text-2xl py-3 font-semibold">{sort_description}</h2>
      <p>{description}</p>
      {userinfo.email === email? <Link state={result} to="/update"><button className="py-2 px-3 bg-green-500 rounded-md my-3 text-white font-bold">Update blog</button></Link> :(
        <div className="py-10">
          <form onSubmit={handleComment} className="">
            <div className="flex gap-3">
              <img
                src={userinfo.pic}
                className="w-12 h-12 rounded-full"
                alt=""
              />
              <div className="flex flex-col items-start">
                <textarea
                  name="comment"
                  required
                  className="outline-none p-3 border rounded-lg"
                  cols="40"
                  placeholder="Write your comment"
                  rows="4"
                ></textarea>
                <input
                  className="py-1 px-2 text-white font-bold bg-green-500 rounded-md my-2"
                  type="submit"
                  value="Comment"
                />
              </div>
            </div>
          </form>
        </div>
      )}

      <div className="space-y-4">
        <h1 className="font-semibold py-2">All comments {comments.length}</h1>
        {comments.map((data) => (
          <div key={data._id}>
            <div className="space-y-2">
              <div className="flex gap-3">
                <img
                  src={data.authorpic}
                  className="w-12 h-12 rounded-full"
                  alt=""
                />
                <div>
                  <h1 className="text-3xl font-semibold">{data.authorname}</h1>
                  <p>{data.comment}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogdetails;
