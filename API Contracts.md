# User
* User object
```
{
    _id: ObjectId
    username: String,
    password: String
    tier: ENUM[PRO, FREE],
    validity: DateTime,
    createdAt: DateTime,
    updatedAt: DateTime
}
```

## **[POST]/signup**
___
Registers a new user and gives a JWT required for protected requests
* **URL Params**
    * None
* **Data Params**
    ```
    {
        username: example_username
        password: example_password
    }
    ```
* **Header**
    * Content-Type: application/json
* **Success Response**
    * Code : 201
    * Content :
        ```
        {
            jwt: *****
        }
        ```
* **Error Response**
    * Code : 400
    * Content :
        ```
        {
            error: Please provide all required fields
        }
        ```
    * Code : 406
    * Content : 
        ```
        {
            error: Username not available
        }
        ```
    * Code : 500
    * Content:
        ```
        {
            error: Message explaining the error
        }
        ```
## **[POST]/login**
___
Authenticates a user and gives a JWT required for protected requests
* **URL Params**
    * None
* **Data Params**
    ```
    {
        username: example_username
        password: example_password
    }
    ```
* **Header**
    * Content-Type: application/json
* **Success Response**
    * Code : 200
    * Content :
        ```
        {
            jwt: *****
        }
        ```
* **Error Response**
    * Code : 400
    * Content :
        ```
        {
            error: Please provide correct creditails
        }
        ```
    * Code : 500
    * Content:
        ```
        {
            error: Message explaining the error
        }
        ```
# Links
* Link Object
```
{
    _id: ObjectId,
    originalUrl: String,
    shortUrlSlug: String,
    userId: ObjectId (ref User),
    title: String,
    public: Boolean,
    timesClicked: Number,
    expiryDate: DateTime,
    createAt: DateTime,
    updatedAt: DateTime
}
```

## **[POST]/create**
Lets you create new short url links

## **[DELETE]/delete**
Deletes the short url entry

## **[GET]/all**
Provides all the URLs created by the user

## **[GET]/:shortURL
Redricts to the original URL that was shortened 