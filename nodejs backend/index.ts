import express, { Express, Request, Response , Application } from 'express';
// import dotenv from 'dotenv';

//For env File 
// dotenv.config();
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const app: Application = express();
const port = process.env.PORT || 8000;

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});

app.get('/tasks', async (req, res) => {
    const posts = await prisma.task.findMany({
      where: {},

    })
    res.json(posts)
  })
  
  app.post('/createUser', async (req, res) => {
    const { email, pass, username } = req.body
    const post = await prisma.users.create({
      data: {
        email,
        pass,
        username,
      },
    })
    res.json(post)
  })

  app.post('/createTask', async (req, res) => {
    const { title, iscomp, isdel, author } = req.body
    const statusAuthor = await prisma.users.findUnique({
      where: {id: author},
    })
    let post;
    if(statusAuthor)
    { 
    post = await prisma.task.create({
      data: {
        title,
        completed: iscomp,
        deleted: isdel,
        userId: author
      },
    })}
    else
    {
      post = "Error. User not found.";
    }
    res.json(post)
  })
  
//   app.put('/publish/:id', async (req, res) => {
//     const { id } = req.params
//     const post = await prisma.post.update({
//       where: { id },
//       data: { published: true },
//     })
//     res.json(post)
//   })
  
//   app.delete('/user/:id', async (req, res) => {
//     const { id } = req.params
//     const user = await prisma.user.delete({
//       where: {
//         id,
//       },
//     })
//     res.json(user)
//   })




app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});


