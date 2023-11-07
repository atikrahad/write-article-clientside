import { useContext } from "react";
import { Authinfo } from "../Shared-Component/Authprovider";
import axios from "axios";

const Addblog = () => {
  const {userinfo} = useContext(Authinfo)
  const {email, pic} = userinfo;
  const handleblogPost = e => {
    e.preventDefault()
    const form = e.target;
    const title = form.title.value;
    const sort_description = form.sort_description.value;
    const img = form.img.value;
    const category = form.category.value;
    const description = form.description.value;

    const blogpost = {title,email,pic, sort_description, img, category, description}
    
    axios.post('http://localhost:5000/blogpost', blogpost)
    .then(data => console.log(data.data))
    
  }
  return (
    <div className="">
      <div className="py-10 bg-base-200">
        <div className=" max-w-7xl w-[90%] p-3 mx-auto shadow-lg rounded-md bg-white flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl md:text-5xl py-5 text-center font-bold">
              Create new blog
            </h1>
          </div>
          <div className="md:w-[80%] mx-auto  rounded-md bg-base-100">
            <form onSubmit={handleblogPost} className="">
              <div className=" w-full">
                <label className="label">
                  <span className="label-text">Blog Title</span>
                </label>
                <input
                  type="text"
                  maxLength={40}
                  name="title"
                  placeholder="blog title"
                  className="input w-full input-bordered"
                  required
                />
              </div>

              <div className="mb-5 w-full">
                <label className="label">
                  <span className="label-text">Short Description</span>
                </label>
                <textarea
                  name="sort_description"
                  className="input w-full input-bordered"
                  maxLength={100}
                  cols="60"
                  rows="10"
                ></textarea>
              </div>

              <div className="flex flex-col gap-3 md:flex-row">
                <div className="w-full">
                  <label className="label">
                    <span className="label-text">Image url</span>
                  </label>
                  <input
                    type="url"
                    placeholder="image url"
                    className="input w-full input-bordered"
                    required
                    name="img"
                  />
                </div>
                <div className=" w-full">
                  <label className="label">
                    <span className="label-text">Blog Type</span>
                  </label>
                  <select
                    name="category"
                    className="input w-full input-bordered"
                    id=""
                  >
                    <option value="Helth">Helth</option>
                    <option value="Sport">Sport</option>
                    <option value="Programing">Programing</option>
                    <option value="Tour">Tour</option>
                  </select>
                </div>
              </div>

              <div className=" mb-5 w-full">
                <label className="label">
                  <span className="label-text">long Description</span>
                </label>
                <textarea
                  name="description"
                  className="input w-full h-96 input-bordered"
                  cols="60"
                  rows="10"
                ></textarea>
              </div>
              

              <div className="form-control w-full">
                <input
                  type="submit"
                  className="py-2 px-3 rounded-md text-white font-bold bg-sky-600"
                  value="CREATE BLOG"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addblog;
