const express = require('express');
const cors = require('cors');
const app = express();
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const PORT = process.env.PORT || 4000;

const {
  Register,
  Login,
  newCourse,
  newLesson,
  newLibrary,
  newLibraryBranch,
  newBook,
} = require('./controllers/create');
const {
  getAllUsers,
  getOneUser,
  getAllCourses,
  getAllLibrary,
  getAllLibraryBranch,
  getAllBooks,
  getAllLessons,
  getOneCourse,
  getOneLesson,
  getOneLibrary,
  getOneLibraryBranch,
  getOneBook,
} = require('./controllers/read');

const {
  updateCourses,
  updateLessons,
  updateLibrary,
  updateLibraryBranch,
  updateBook,
  giveAdminRole,
} = require('./controllers/update');

const {
  deleteUser,
  deleteCourse,
  deleteLesson,
  deleteLibrary,
  deleteLibraryBranch,
  deleteBook,
} = require('./controllers/delete');

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hello Swagger',
      version: '1.0.0',
      description: 'CRUD API FOR MANAGING LIBRARY SYSTEM',
      servers: ['http://localhost:4000'],
    },
  },
  apis: ['index.js'],
};
const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

const {} = require('./controllers/update');
var corsOptions = {
  origin: 'http://example.com',
  optionSuccessStatus: 200,
};

/**
 * @swagger
 * components:
 *   schemas:
 *     Users:
 *       type: object
 *       required:
 *         - name
 *         - password
 *       properties:
 *         id:
 *           type: serial
 *         name:
 *           type: string
 *         password:
 *           type: string
 *         isStudent:
 *           type: boolean default true
 *         isAdmin:
 *           type: boolean default false
 *         isSuperAdmin:
 *           type: boolean default false
 *
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Courses:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: serial
 *         name:
 *           type: string
 *         description:
 *           type: string
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Lessons:
 *       type: object
 *       required:
 *         - name
 *         - photo
 *         - description
 *       properties:
 *         id:
 *           type: serial
 *         name:
 *           type: string
 *         photo:
 *           type: string
 *         description:
 *           type: string
 *         course_id:
 *           type: number
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Library:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: serial
 *         name:
 *           type: string
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Library_Branch:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: serial
 *         name:
 *           type: string
 *         library_id:
 *           type: number
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Books:
 *       type: object
 *       required:
 *         - name
 *         - photo
 *         - description
 *       properties:
 *         id:
 *           type: serial
 *         name:
 *           type: string
 *         photo:
 *           type: string
 *         description:
 *           type: string
 *         library_branch_id:
 *           type: number
 */

app.use(express.json());
/**
 * @swagger
 * definitions:
 *  User:
 *   type: object
 *   properties:
 *    name:
 *     type: string
 *     description: name of the user
 *     example: 'Aziz'
 *    password:
 *     type: string
 *     description: password of the user
 *     example: '123'
 *  Course:
 *   type: object
 *   properties:
 *    name:
 *     type: string
 *     description: name of the course
 *     example: 'Javscript'
 *    description:
 *     type: string
 *     description: description of the course
 *     example: 'lorem ipsum dolor smit..'
 *  Lesson:
 *   type: object
 *   properties:
 *    name:
 *     type: string
 *     description: name of the lesson
 *     example: 'Javscript'
 *    photo:
 *     type: string
 *     description: link of the lesson
 *     example: 'https://image.shutterstock.com/image-photo/lesson-1-white-chalk-text-260nw-535576588.jpg'
 *    description:
 *     type: string
 *     description: description of the lesson
 *     example: 'lorem ipsum dolor smit..'
 *    course_id:
 *     type: serial
 *     description: course_id of the lesson
 *     example: 4
 *  Library:
 *   type: object
 *   properties:
 *    name:
 *     type: string
 *     description: name of the library
 *     example: 'Amir Temur kutubxonasi'
 *  Librarybranch:
 *   type: object
 *   properties:
 *    name:
 *     type: string
 *     description: name of the library
 *     example: 'Historical books'
 *    library_id:
 *     type: number
 *     description: id of the library
 *     example: 2
 *  Book:
 *   type: object
 *   properties:
 *    name:
 *     type: string
 *     description: name of the lesson
 *     example: 'Learn Javscript'
 *    photo:
 *     type: string
 *     description: link of the lesson
 *     example: 'https://www.ukrgate.com/eng/wp-content/uploads/2021/02/The-Ukrainian-Book-Institute-Purchases-380.9-Thousand-Books-for-Public-Libraries1.jpeg'
 *    description:
 *     type: string
 *     description: description of the lesson
 *     example: 'for developers'
 *    library_branch_id:
 *     type: serial
 *     description: course_id of the lesson
 *     example: 1
 */

/**
 * @swagger
 * /api/register:
 *  post:
 *   summary: Register user
 *   description: create a new user to register
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/User'
 *   responses:
 *    200:
 *     description: Created successfully
 *    500:
 *     description: Failure in register user
 */

app.post('/api/register', Register);

/**
 * @swagger
 * /api/login:
 *  post:
 *   summary: Login user
 *   description: Login user
 *   parameters:
 *    - in: body
 *      name: body
 *      required: true
 *      description: body of the team
 *      schema:
 *       $ref: '#/definitions/User'
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/User'
 *   responses:
 *    200:
 *     description: success
 *    500:
 *     description : error
 */

app.post('/api/login', Login);

/**
 * @swagger
 * /api/user/list:
 *  get:
 *   summary: get all users
 *   description: get all users
 *   responses:
 *    200:
 *     description: success
 *    500:
 *     description: error
 */
app.get('/api/user/list', cors(), getAllUsers);

/**
 * @swagger
 * /api/user/{id}:
 *  get:
 *   summary: get one user
 *   description: get one user
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: integer
 *      required: true
 *      description: id of the user
 *      example: 2
 *   responses:
 *    200:
 *     description: success
 */
app.get(`/api/user/:id`, cors(), getOneUser);

/**
 * @swagger
 * /api/user/{id}:
 *  put:
 *   summary: give admin role
 *   description: give admin role
 *   consumes:
 *    - application/json
 *   produces:
 *    - application/json
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: integer
 *      required: true
 *      description: id of the user
 *      example: 2
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/User'
 *   responses:
 *    200:
 *     description: success
 */
app.get('/api/user/:id', cors(), giveAdminRole);

/**
 * @swagger
 * /api/user/{id}:
 *  delete:
 *   summary: delete user
 *   description: delete user
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: integer
 *      required: true
 *      description: id of the user
 *      example: 2
 *   responses:
 *    200:
 *     description: success
 */
app.delete('/api/user/:id', deleteUser);

/**
 * @swagger
 * /api/course:
 *  post:
 *   summary: create new course
 *   description: create new course
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/Course'
 *   responses:
 *    200:
 *     description: Created successfully
 *    500:
 *     description: Failure in create new course
 */

app.post('/api/course', newCourse);

/**
 * @swagger
 * /api/courses/list:
 *  get:
 *   summary: get all course
 *   description: get all courses info
 *   responses:
 *    200:
 *     description: success
 *    500:
 *     description: error
 */
app.get('/api/courses/list', cors(), getAllCourses);

/**
 * @swagger
 * /api/courses/{id}:
 *  get:
 *   summary: get one course
 *   description: get one course
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: integer
 *      required: true
 *      description: id of the course
 *      example: 2
 *   responses:
 *    200:
 *     description: success
 */
app.get(`/api/courses/:id`, cors(), getOneCourse);

/**
 * @swagger
 * /api/courses/{id}:
 *  put:
 *   summary: update course
 *   description: update course
 *   consumes:
 *    - application/json
 *   produces:
 *    - application/json
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: integer
 *      required: true
 *      description: id of the course
 *      example: 2
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/Course'
 *   responses:
 *    200:
 *     description: success
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/definitions/Course'
 */
app.put('/api/courses/:id', cors(corsOptions), updateCourses);

/**
 * @swagger
 * /api/courses/{id}:
 *  delete:
 *   summary: delete courses
 *   description: delete courses
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: integer
 *      required: true
 *      description: id of the courses
 *      example: 2
 *   responses:
 *    200:
 *     description: success
 */
app.delete('/api/courses/:id', deleteCourse);

/**
 * @swagger
 * /api/lesson:
 *  post:
 *   summary: create new lesson
 *   description: create new lesson
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/Lesson'
 *   responses:
 *    200:
 *     description: Created successfully
 *    500:
 *     description: Failure in create new course
 */

app.post('/api/lessons', newLesson);

/**
 * @swagger
 * /api/lesson/list:
 *  get:
 *   summary: get all lessons
 *   description: get all lessons info
 *   responses:
 *    200:
 *     description: success
 *    500:
 *     description: error
 */
app.get('/api/lesson/list', cors(), getAllLessons);

/**
 * @swagger
 * /api/lesson/{id}:
 *  get:
 *   summary: get one lesson
 *   description: get one lesson
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: integer
 *      required: true
 *      description: id of the lesson
 *      example: 2
 *   responses:
 *    200:
 *     description: success
 */
app.get(`/api/lesson/:id`, cors(), getOneLesson);

/**
 * @swagger
 * /api/lesson/{id}:
 *  put:
 *   summary: update lesson
 *   description: update lesson
 *   consumes:
 *    - application/json
 *   produces:
 *    - application/json
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: integer
 *      required: true
 *      description: id of the lesson
 *      example: 2
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/Lesson'
 *   responses:
 *    200:
 *     description: success
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/definitions/Lesson'
 */
app.put('/api/lesson/:id', cors(corsOptions), updateLessons);

/**
 * @swagger
 * /api/lesson/{id}:
 *  delete:
 *   summary: delete lesson
 *   description: delete lesson
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: integer
 *      required: true
 *      description: id of the lesson
 *      example: 2
 *   responses:
 *    200:
 *     description: success
 */
app.delete('/api/lesson/:id', deleteLesson);

/**
 * @swagger
 * /api/library:
 *  post:
 *   summary: new library
 *   description: new library
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/Library'
 *   responses:
 *    200:
 *     description: Created successfully
 *    500:
 *     description: Failure in register user
 */

app.post('/api/library', newLibrary);

/**
 * @swagger
 * /api/library/list:
 *  get:
 *   summary: get all library
 *   description: get all library info
 *   responses:
 *    200:
 *     description: success
 *    500:
 *     description: error
 */
app.get('/api/library/list', cors(), getAllLibrary);

/**
 * @swagger
 * /api/library/{id}:
 *  get:
 *   summary: get one library
 *   description: get one library
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: integer
 *      required: true
 *      description: id of the library
 *      example: 2
 *   responses:
 *    200:
 *     description: success
 */
app.get(`/api/library/:id`, cors(), getOneLibrary);

/**
 * @swagger
 * /api/library/{id}:
 *  put:
 *   summary: update library
 *   description: update library
 *   consumes:
 *    - application/json
 *   produces:
 *    - application/json
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: integer
 *      required: true
 *      description: id of the library
 *      example: 2
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/Library'
 *   responses:
 *    200:
 *     description: success
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/definitions/Library'
 */
app.put('/api/library/:id', cors(corsOptions), updateLibrary);

/**
 * @swagger
 * /api/library/{id}:
 *  delete:
 *   summary: delete library
 *   description: delete library
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: integer
 *      required: true
 *      description: id of the library
 *      example: 2
 *   responses:
 *    200:
 *     description: success
 */
app.delete('/api/library/:id', deleteLibrary);

/**
 * @swagger
 * /api/branches:
 *  post:
 *   summary: create new library branch
 *   description: create new library branch
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/Librarybranch'
 *   responses:
 *    200:
 *     description: Created successfully
 *    500:
 *     description: Failure
 */

app.post('/api/branches', newLibraryBranch);

/**
 * @swagger
 * /api/branches/list:
 *  get:
 *   summary: get all librarybranch
 *   description: get all librarybranch info
 *   responses:
 *    200:
 *     description: success
 *    500:
 *     description: error
 */
app.get('/api/branches/list', cors(), getAllLibraryBranch);

/**
 * @swagger
 * /api/branches/{id}:
 *  get:
 *   summary: get one library branches
 *   description: get one library branches
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: integer
 *      required: true
 *      description: id of the library branches
 *      example: 2
 *   responses:
 *    200:
 *     description: success
 */
app.get(`/api/branches/:id`, cors(), getOneLibraryBranch);

/**
 * @swagger
 * /api/branches/{id}:
 *  put:
 *   summary: update library branches
 *   description: update library branches
 *   consumes:
 *    - application/json
 *   produces:
 *    - application/json
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: integer
 *      required: true
 *      description: id of the library branches
 *      example: 2
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/Librarybranch'
 *   responses:
 *    200:
 *     description: success
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/definitions/Librarybranch'
 */
app.put('/api/branches/:id', cors(corsOptions), updateLibraryBranch);

/**
 * @swagger
 * /api/branches/{id}:
 *  delete:
 *   summary: delete branches
 *   description: delete branches
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: integer
 *      required: true
 *      description: id of the branches
 *      example: 2
 *   responses:
 *    200:
 *     description: success
 */
app.delete('/api/branches/:id', deleteLibraryBranch);

/**
 * @swagger
 * /api/book:
 *  post:
 *   summary: create new book
 *   description: create new book
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/Book'
 *   responses:
 *    200:
 *     description: Created successfully
 *    500:
 *     description: Failure
 */

app.post('/api/book', newBook);

/**
 * @swagger
 * /api/books/list:
 *  get:
 *   summary: get all books
 *   description: get all books info
 *   responses:
 *    200:
 *     description: success
 *    500:
 *     description: error
 */
app.get('/api/books/list', cors(), getAllBooks);

/**
 * @swagger
 * /api/books/{id}:
 *  get:
 *   summary: get one book
 *   description: get one book
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: integer
 *      required: true
 *      description: id of the book
 *      example: 2
 *   responses:
 *    200:
 *     description: success
 */
app.get(`/api/books/:id`, cors(), getOneBook);

/**
 * @swagger
 * /api/books/{id}:
 *  put:
 *   summary: update books
 *   description: update books
 *   consumes:
 *    - application/json
 *   produces:
 *    - application/json
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: integer
 *      required: true
 *      description: id of the books
 *      example: 2
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/Book'
 *   responses:
 *    200:
 *     description: success
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/definitions/Book'
 */
app.put('/api/books/:id', cors(corsOptions), updateBook);

/**
 * @swagger
 * /api/books/{id}:
 *  delete:
 *   summary: delete books
 *   description: delete books
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: integer
 *      required: true
 *      description: id of the books
 *      example: 2
 *   responses:
 *    200:
 *     description: success
 */
app.delete('/api/books/:id', deleteBook);

app.listen(PORT, () => {
  console.log(`The server listening in port: ${PORT}`);
});
