import BookmarkSvgIcon from '@/modules/common/components/icon/svg-icon/BookmarkSvgIcon';
import HeartSvgIcon from '@/modules/common/components/icon/svg-icon/HeartSvgIcon';
import MessageSvgIcon from '@/modules/common/components/icon/svg-icon/MessageSvgIcon';
import ShareSvgIcon from '@/modules/common/components/icon/svg-icon/ShareSvgIcon';

type PostActionProps = {
  onLike?: () => any;
  onMessage?: () => any;
  onShare?: () => any;
  onBookmark?: () => any;
};

export default function PostAction(props: PostActionProps) {
  const { onBookmark, onLike, onMessage, onShare } = props;

  return (
    <div className="flex items-center">
      <div className="flex space-x-5">
        <div className="cursor-pointer p-2" onClick={onLike}>
          <HeartSvgIcon />
        </div>

        <div className="cursor-pointer p-2" onClick={onLike}>
          <MessageSvgIcon />
        </div>
        <div className="cursor-pointer p-2" onClick={onLike}>
          <ShareSvgIcon />
        </div>
      </div>

      <div className="ml-auto cursor-pointer p-2" onClick={onBookmark}>
        <BookmarkSvgIcon />
      </div>
    </div>
  );
}
