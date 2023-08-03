import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../../hooks/store/selectorHook';
import { BASE_DOMAIN } from '../../../../utilities/Definds';
import z from 'zod';

import style from './MovieCommentBox.module.css';
import { useComment, useMovieComment } from '../../../../hooks/useSingleMovie';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { alertAction } from '../../../../store/slices/alertSlice';

interface Props {
  id: number;
}

const schema = z.object({
  comment: z.string().min(1, { message: 'حداقل باید یه کاراکتر باشد' }),
});

type FormFace = z.infer<typeof schema>;

function MovieCommentBox({ id }: Props) {
  const user = useAppSelector(state => state.user);
  const form = useForm<FormFace>({ resolver: zodResolver(schema) });
  const dispatch = useDispatch();

  const { data: comments } = useMovieComment(id);
  const comment = useComment();

  const doSubmit: SubmitHandler<FormFace> = value => {
    comment.mutate({ comment: value.comment, movieId: id, userId: user.id });
  };

  useEffect(() => {
    if (comment.data?.success === true) {
      dispatch(
        alertAction.showAlert({
          message: comment.data.message,
          show: true,
          success: true,
        })
      );

      form.reset();
    }
  }, [comment.data?.success]);

  return (
    <section className="my-5">
      <div className="container">
        {user.email && (
          <>
            <h4 className="ms-5 me-5 mt-5">ارسال نظر</h4>
            <div className={style['box-comment']}>
              <div className={style['"box-comment-info"']}>
                <img src={BASE_DOMAIN + user.photo} alt="" />
                <span>{user.userName}</span>
              </div>
              <form onSubmit={form.handleSubmit(doSubmit)}>
                <textarea
                  id="commentTextArea"
                  cols={30}
                  rows={10}
                  {...form.register('comment')}
                ></textarea>
                <button className="btn btn-success">ارسال نظر</button>
              </form>
            </div>
          </>
        )}

        {!user.id && (
          <div className="text-center border border-1 p-5 rounded-1">
            <h4 className="text-center mb-2">برای ارسال نظر باید وارد شوید</h4>
            <Link to={'/login'} className="btn btn-danger">
              ورود
            </Link>
          </div>
        )}

        <h4 className="ms-5 me-5 mt-5">نظرات</h4>

        {comments?.data.map((item, idx) => (
          <div className={style['box-comment']} key={idx}>
            <div className={style['box-comment-info']}>
              <img src={BASE_DOMAIN + item.photo} alt="" />
              <span>{item.userName}</span>
              <span className="me-auto bg-lightgreen p-2 rounded-1">
                {item.created_at}
              </span>
            </div>
            <div className={style['box-comment-text']}>{item.body}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MovieCommentBox;
