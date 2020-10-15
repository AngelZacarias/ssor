'use strict';

const Comment = use('App/Models/Comment');
const Database = use('Database');

class CommentController {
  async save({request, response, session}){
    const params = request.all();
    const {fullName, studentComment} = params;

    const myComment = new Comment();
    myComment.fullName = fullName;
    myComment.studentComment = studentComment;

    await myComment.save();

    session.flash({
      type: 'info',
      message: 'Comentario Realizado'
    });
    response.route('activity7', {});

  }

  async getComments({view}){
    const comments = await Comment.all();
    const myComments = comments.toJSON();
    return view.render('activity7',{comments: myComments});
  }
}

module.exports = CommentController;
