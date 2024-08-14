// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Book from "../../model/Book";
// import bookService from "../../service/book.service";
// import categoryService from "../../service/category.service";
// import "./AddBook.css";
// import { ToastContainer, toast } from "react-toastify";

// const AddBook = () => {
//   const [book, setBook] = useState({
//     bookName:"",
//     description:"",
//     author:"",
//     category:"",
//     isbnNo:"",
//     language:"",
//     price:""

// });
// const [errors, setErrors] = useState({});
// const [imgFile, setImgFile] = useState(null);

//   const [categoryList, setCategoryList] = useState([]);
  
//   const navigate = useNavigate();

//   const handleBookImage = (e) => {
//     setImgFile(e.target.files[0]);
//   };
  

//   const handleBook = (e) => {
//     const { name, value } = e.target;
//     setBook((prevState) => {
//       return {
//         ...prevState,
//         [name]: value,
//       };
//     });
//   };
// const validate = () => {
//   const newErrors = {};
//   if (!book.bookName) newErrors.bookName = "Book name is required";
//   if (!book.description) newErrors.description = "Description is required";
//   if (!book.author) newErrors.author = "Author is required";
//   if (!book.category) newErrors.category = "Category is required";
//   if (!book.isbnNo) newErrors.isbnNo = "ISBN No is required";
//   if (!book.language) newErrors.language = "Language is required";
//   if (!book.price) newErrors.price = "Price is required";
//   if (!imgFile) newErrors.imgFile = "Image file is required";

//   setErrors(newErrors);
//   return Object.keys(newErrors).length === 0;
// };
  

//   const notify = () =>
//     toast.success("Book Added Sucesfully", {
//       position: "top-center",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//     });
//     const notifyError = (message) =>
//       toast.error(message, {
//         position: "top-center",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined
//       });

//   const registerBook = (e) => {
//     e.preventDefault();
//     if (!validate()) return;
//     const fd = new FormData();
//     fd.append("bookName", book.bookName);
//     fd.append("description", book.description);
//     fd.append("author", book.author);
//     fd.append("categorysId", book.categorysId);
//     fd.append("isbnNo", book.isbnNo);
//     fd.append("language", book.language);
//     fd.append("price", book.price);
//     fd.append("file", imgFile);

//    // console.log(fd);
//   // console.log(JSON.stringify(book.category));
//   //console.log(book);
//     bookService
//       .saveBook(book)
//       .then((res) => {
//        // console.log(res.data.id);
//           return bookService.uploadProductImage(imgFile,res.data.id)
//       })
//       .then(()=>{
//         notify();
//        setBook( new Book("", "", "", "", "", "", "", "", ""));
//        navigate('/admin/ViewBook')
//       })
//       .catch((error) => {
//         console.log(error);
//         notifyError("failed to add,please try again..!");
        
//       });
//   };

//   useEffect(() => {
//     categoryService
//       .getAllCategory()
//       .then((response) => {
//         setCategoryList(response.data);
//         // console.log(response.data);
//       })
//       .catch();
//   }, []);

//   return (
//     <div class="card paint-card cardx">
//       <div class="card-body">
//         <h4 class="form-signin-heading text-center">Add Book</h4>
//         <form
//           noValidate
//           class="form-signin"
//           method="post"
//           onSubmit={(e) => registerBook(e)}
//         >
//           <div className="row">
//             <div class="mb-3 col">
//               <label for="exampleInputEmail1" class="form-label">
//                 Book Name
//               </label>
//               <input
//                 type="text"
//                 class="form-control"
//                 required
//                 name="bookName"
//                 value={book.bookName}
//                 onChange={(e) => handleBook(e)}
              
//               />
//               {errors.bookName && <p className="text-danger">{errors.bookName}</p>}
//             </div>

//             <div class="mb-3 col">
//               <label for="exampleInputEmail1" class="form-label">
//                 Author
//               </label>
//               <input
//                 type="text"
//                 class="form-control"
//                 required
//                 name="author"
//                 value={book.author}
//                 onChange={(e) => handleBook(e)}
//               />
//                {errors.author && <p className="text-danger">{errors.author}</p>}
//             </div>
//           </div>

//           <div className="row">
//             <div class="mb-3 col">
//               <label for="exampleInputEmail1" class="form-label">
//                 Category
//               </label>
//               <select
//                 name="category"
//                 class="form-control"
//                 onChange={(e) => handleBook(e)}
//               >
//                 <option>--select--</option>
//                 {categoryList.map((category, num) => (
//                   <option value={category.categoryName}>{category.categoryName}</option>
//                 ))}
//               </select>
//               {errors.category && <p className="text-danger">{errors.category}</p>}
//             </div>

//             <div class="mb-3 col">
//               <label for="exampleInputEmail1" class="form-label">
//                 ISBN No
//               </label>
//               <input
//                 type="text"
//                 class="form-control"
//                 required
//                 name="isbnNo"
//                 value={book.isbnNo}
//                 onChange={(e) => handleBook(e)}
//               />
//               {errors.isbnNo && <p className="text-danger">{errors.isbnNo}</p>}
//             </div>
//           </div>
//           <div className="row">
//             <div class="mb-3 col">
//               <label for="exampleInputEmail1" class="form-label">
//                 Price
//               </label>
//               <input
//                 type="number"
//                 class="form-control"
//                 required
//                 name="price"
//                 value={book.price}
//                 onChange={(e) => handleBook(e)}
//               />
//                {errors.price && <p className="text-danger">{errors.price}</p>}
//             </div>

//             <div class="mb-3 col">
//               <label for="exampleInputEmail1" class="form-label">
//                 Image
//               </label>
//               <input
//                 type="file"
//                 class="form-control"
//                 required
//                 name="img"
//                 onChange={handleBookImage}
//               />
//                {errors.imgFile && <p className="text-danger">{errors.imgFile}</p>}
//             </div>
//           </div>

//           <div class="mb-3 col">
//             <label for="exampleInputEmail1" class="form-label">
//               Language
//             </label>
//             <input
//               type="text"
//               class="form-control"
//               required
//               name="language"
//               value={book.language}
//               onChange={(e) => handleBook(e)}
//             />
//              {errors.language && <p className="text-danger">{errors.language}</p>}
//           </div>

//           <div class="mb-3">
//             <label for="exampleInputEmail1" class="form-label">
//               Description
//             </label>
//             <textarea
//               rows="3"
//               cols=""
//               class="form-control"
//               name="description"
//               value={book.description}
//               onChange={(e) => handleBook(e)}
//             ></textarea>
//             {errors.description && <p className="text-danger">{errors.description}</p>}
//           </div>
//           <button class="btn bg-primary text-white col-md-12" type="submit">
//             Submit
//           </button>

//           <div class="text-center p-3"></div>
//         </form>
//       </div>
//       <ToastContainer
//         position="top-center"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//       />
//     </div>
//   );
// };

// export { AddBook };



















import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Book from "../../model/Book";
import bookService from "../../service/book.service";
import categoryService from "../../service/category.service";
import "./AddBook.css";
import { ToastContainer, toast } from "react-toastify";

const AddBook = () => {
  const [book, setBook] = useState({
    bookName: "",
    description: "",
    author: "",
    category: "",
    isbnNo: "",
    language: "",
    price: "",
  });

  const [errors, setErrors] = useState({});
  const [imgFile, setImgFile] = useState(null);
  const [categoryList, setCategoryList] = useState([]);
  const navigate = useNavigate();

  const handleBookImage = (e) => {
    setImgFile(e.target.files[0]);
  };

  const handleBook = (e) => {
    const { name, value } = e.target;
    setBook((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!book.bookName) newErrors.bookName = "Book name is required";
    if (!book.description) newErrors.description = "Description is required";
    if (!book.author) newErrors.author = "Author is required";
    if (!book.category) newErrors.category = "Category is required";
    if (!book.isbnNo) newErrors.isbnNo = "ISBN No is required";
    if (!book.language) newErrors.language = "Language is required";
    if (!book.price) newErrors.price = "Price is required";
    if (!imgFile) newErrors.imgFile = "Image file is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const notify = () =>
    toast.success("Book Added Succesfully", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const notifyError = (message) =>
    toast.error(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const registerBook = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const fd = new FormData();
    fd.append("bookName", book.bookName);
    fd.append("description", book.description);
    fd.append("author", book.author);
    fd.append("categorysId", book.categorysId);
    fd.append("isbnNo", book.isbnNo);
    fd.append("language", book.language);
    fd.append("price", book.price);
    fd.append("file", imgFile);

    bookService
      .saveBook(book)
      .then((res) => {
        return bookService.uploadProductImage(imgFile, res.data.id);
      })
      .then(() => {
        notify();
        setBook(new Book("", "", "", "", "", "", "", "", ""));
        navigate("/admin/ViewBook");
      })
      .catch((error) => {
        console.log(error);
        notifyError("Failed to add, please try again..!");
      });
  };

  useEffect(() => {
    categoryService
      .getAllCategory()
      .then((response) => {
        setCategoryList(response.data);
      })
      .catch();
  }, []);

  return (
    <div className="card paint-card cardx">
      <div className="card-body">
        <h4 className="form-signin-heading text-center">Add Book</h4>
        <form
          noValidate
          className="form-signin"
          method="post"
          onSubmit={(e) => registerBook(e)}
        >
          <div className="row">
            <div className="mb-3 col">
              <label htmlFor="bookName" className="form-label">
                Book Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                name="bookName"
                value={book.bookName}
                onChange={(e) => handleBook(e)}
              />
              {errors.bookName && (
                <p className="text-danger">{errors.bookName}</p>
              )}
            </div>

            <div className="mb-3 col">
              <label htmlFor="author" className="form-label">
                Author <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                name="author"
                value={book.author}
                onChange={(e) => handleBook(e)}
              />
              {errors.author && (
                <p className="text-danger">{errors.author}</p>
              )}
            </div>
          </div>

          <div className="row">
            <div className="mb-3 col">
              <label htmlFor="category" className="form-label">
                Category <span className="text-danger">*</span>
              </label>
              <select
                name="category"
                className="form-control"
                onChange={(e) => handleBook(e)}
              >
                <option>--select--</option>
                {categoryList.map((category, num) => (
                  <option value={category.categoryName}>
                    {category.categoryName}
                  </option>
                ))}
              </select>
              {errors.category && (
                <p className="text-danger">{errors.category}</p>
              )}
            </div>

            <div className="mb-3 col">
              <label htmlFor="isbnNo" className="form-label">
                ISBN No <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                name="isbnNo"
                value={book.isbnNo}
                onChange={(e) => handleBook(e)}
              />
              {errors.isbnNo && (
                <p className="text-danger">{errors.isbnNo}</p>
              )}
            </div>
          </div>
          <div className="row">
            <div className="mb-3 col">
              <label htmlFor="price" className="form-label">
                Price <span className="text-danger">*</span>
              </label>
              <input
                type="number"
                className="form-control"
                name="price"
                value={book.price}
                onChange={(e) => handleBook(e)}
              />
              {errors.price && (
                <p className="text-danger">{errors.price}</p>
              )}
            </div>

            <div className="mb-3 col">
              <label htmlFor="img" className="form-label">
                Image <span className="text-danger">*</span>
              </label>
              <input
                type="file"
                className="form-control"
                name="img"
                onChange={handleBookImage}
              />
              {errors.imgFile && (
                <p className="text-danger">{errors.imgFile}</p>
              )}
            </div>
          </div>

          <div className="mb-3 col">
            <label htmlFor="language" className="form-label">
              Language <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              name="language"
              value={book.language}
              onChange={(e) => handleBook(e)}
            />
            {errors.language && (
              <p className="text-danger">{errors.language}</p>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description <span className="text-danger">*</span>
            </label>
            <textarea
              rows="3"
              className="form-control"
              name="description"
              value={book.description}
              onChange={(e) => handleBook(e)}
            ></textarea>
            {errors.description && (
              <p className="text-danger">{errors.description}</p>
            )}
          </div>
          <button className="btn bg-primary text-white col-md-12" type="submit">
            Submit
          </button>

          <div className="text-center p-3"></div>
        </form>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export { AddBook };


