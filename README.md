# Notebook-note_taking_app
## Social Media application built using T3 stack ( TRPC, NextJs, TypeScript Tailwind, Prisma).
---
## Features 
- user authentication.
- Images/ video upload
- like/unlike posts.
- follow/unfollow users.
- comment on posts.

![image](https://res.cloudinary.com/dzlpv4yx6/image/upload/v1722097151/social-media-images/od43dix9h23uet6duncg.png)


## Getting Started
1. Clone the repository to your local machine.
```bash
git clone https://github.com/himanshu8443/SocialSphere.git
```
2. Set up the environment variables: <br>
Create `.env` in root and `./server` folders check `.env.example` file of the respectable folder to get environment variables.

3. Install the required packages.
```bash
cd SocialSphere
npm install
```
4. Start server
```bash
cd server
npx prisma generate
cd ..
npm run dev:server
```
5. Start client
```bash
npm run dev:client
```



Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
