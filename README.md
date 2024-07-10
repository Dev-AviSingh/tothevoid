# ToTheVoid
A simple thought sharing platform which assures 100% anonymity.




## API Functions : 


### Create Post `POST` `/post`
### Update Post `PATCH` `/post`
### DELETE Post `DELETE` `/post`
### GET Post `GET` `/post`
> Needs to have Authorization in the headers with the jwt, except for get post.
> Send json data
```json
{
    "postid":"alphanumericid" 
}
```



### GET Posts `GET` `/posts`
> Returns all the post ids.

### Get Comment `GET` `/`
> Returns the comment.


### Add comment `POST` `/comment`
> Adds a comment to the post.