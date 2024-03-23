import PostModel from "../models/post.model.js";

export class PostController {
    // static async getAllPosts(req,res) {
    //     try{
    //         // const posts = await PostModel.getAll(req.params.id);
    //          const posts = await PostModel.getAll(req.params.id);
    //         res.send(posts);

    //     }catch(error) {
    //         res.status(400).send({message: error.message});

    //     }
        
    // }

    static async getAllPosts(req,res) {
        try{
            let posts;
            const keyword = req.query.keyword;
            if(keyword) {
                posts = await PostModel.getAll().filter((post) => post.tags.includes(keyword));
            } else {
                posts = await PostModel.getAll();
            }
            res.send(posts);
    }catch(error){
        res.status(400).send({message: error.message});
    }
}
    
    static async getPost(req,res) {
        try{
            const post = await PostModel.getById(req.params.id);
            res.send(post);

        }catch(error){
            res.status(400).send({message: error.message});

        }
    }

    static async createPost(req,res) {
        try{
            const postBody = req.body;
            const post = await PostModel.create(postBody);
            res.status(201).send(post);

        }catch(error){
            res.status(400).send({message: error.message});

        }
        
    }
    3

    static async updatePost(req,res) {
        try{
            const postBody = req.body;
            const post = await PostModel.update(req.params.id, postBody);
            res.send(post);
    }catch(error){
        res.status(400).send({message: error.message});
    }


}

static async deletePost(req,res) {
    try{
        await PostModel.delete(req.params.id);
        res.status(200).send({message: "Post deleted"});
    }catch(error){
        res.status(400).send({message: error.message});
    }
}

}
