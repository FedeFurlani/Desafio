export interface Posts
{
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface CreatePosts extends Omit<Posts, 'id'>
{
}

export interface Comments
{
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

//Prueba paginator:
export interface PeriodicElement 
{
    name: string;
    position: number;
    weight: number;
    symbol: string;
}