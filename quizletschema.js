const user={

    user_id:"ObjectId",
    email: "String",
    passowrd:"number",
    cards:[card]

},

card={
_id:"ObjectID",
question:"String",
answer:"String",
tags:[String],
comments:[comments]

},

course={
_id:"ObjectId",
subject:"String",
title:"String",
cards:[card]


},

comments={
_id:"ObjectId",
comment:"String",
user_id: User_id
}
