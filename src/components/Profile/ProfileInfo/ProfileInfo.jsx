import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
	return (
		<div>
			<div className={s.bg}>
				<img className={s.img} src="https://i.pinimg.com/originals/79/e1/bf/79e1bfdfed55389db72183cd3e98c67d.png" alt="background" />
			</div>
			<div className={s.avatarBlock}>
				<img className={s.avatar} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2b5b4dc0-287d-479e-8d37-63776cfef1d0/d94pypk-ee6e8625-7ccb-4a90-8dc2-f42936877ca0.png/v1/fill/w_1154,h_692,strp/warlock_girl_on_plaguelands_by_ipheli_d94pypk-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTIwMCIsInBhdGgiOiJcL2ZcLzJiNWI0ZGMwLTI4N2QtNDc5ZS04ZDM3LTYzNzc2Y2ZlZjFkMFwvZDk0cHlway1lZTZlODYyNS03Y2NiLTRhOTAtOGRjMi1mNDI5MzY4NzdjYTAucG5nIiwid2lkdGgiOiI8PTIwMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Srpbnni4O86BaqmT9Bxge0taA7ymQENsaYujUg_k_0I" alt="" />
					ava+description
			</div>
		</div>
	);
};

export default ProfileInfo;