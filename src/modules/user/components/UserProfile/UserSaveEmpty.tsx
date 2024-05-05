import InstaImgIcon from '@/modules/common/components/icon/InstaImgIcon';

export default function UserBookmarkEmpty() {
	return (
		<div className='w-[350px] mx-auto flex flex-col items-center mt-8'>
			<InstaImgIcon
				backgroundPosition='-126px -288px'
				url='https://static.cdninstagram.com/rsrc.php/v3/yV/r/6JqvJ6H_bFT.png'
				backgroundSize='440px 411px'
				width={62}
				height={62}
			/>

			<h2 className='font-extrabold text-3xl tracking-wide mt-6'>Lưu</h2>
			<p className='text-sm mt-5 mb-6'>
				Lưu ảnh và video mà bạn muốn xem lại. Sẽ không có ai được thông báo và
				chỉ mình bạn có thể xem những gì mình đã lưu.
			</p>
		</div>
	);
}
