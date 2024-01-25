import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ListPage from '../components/ListPage';
import Warn from '../components/Warn';
import CourseItem from '../components/CourseItem';
import { getCourses } from '../api';
import styles from './CourseListPage.module.css';
import searchBarStyles from '../components/SearchBar.module.css';
import searchIcon from '../assets/search.svg';

function CourseListPage() {
	const [searchParam, setSearchParam] = useSearchParams();
	// useSearchParams 훅을 사용하여 URL의 쿼리 파라미터를 읽고 관리
	// useState와는 다르게 브라우저의 주소 표시줄에 표시되므로
	// 사용자가 페이지를 새로고침하거나 링크를 공유할 때도 유지가 됨
	const initKeyword = searchParam.get('keyword');
	// URL에서 'keyword' 쿼리 파라미터의 값을 가져오기
	const [keyword, setKeyword] = useState(initKeyword || '');
	const courses = getCourses(initKeyword);

	const handleKeywordChange = (e) => setKeyword(e.target.value);

	const handleSubmit = (e) => {
		e.preventDefault(); // 페이지가 새로고침되는 것을 방지
		setSearchParam(keyword ? { keyword } : {});
		// keyword 상태를 확인하여 값이 있으면 { keyword } 객체를 사용해서
		// URL의 쿼리 파라미터를 업데이트 함
		// 만약 keyword가 비어있다면 빈 객체 {} 를 전달하여 쿼리 파라미터를 제거
	};

	// 사용자가 검색 폼을 제출할 때 실행되는 이벤트 핸들러

	return (
		<ListPage variant='catalog' title='모든 코스' description='자체 제작된 코스들로 기초를 쌓으세요.'>
			<form className={searchBarStyles.form} onSubmit={handleSubmit}>
				<input name='keyword' value={keyword} onChange={handleKeywordChange} placeholder='검색으로 코스 찾기'></input>
				<button type='submit'>
					<img src={searchIcon} alt='검색' />
				</button>
			</form>

			<p className={styles.count}>총 {courses.length}개 코스</p>

			{/* 검색결과가 없을 때 보여주는 페이지 */}
			{initKeyword && courses.length === 0 ? (
				<Warn className={styles.emptyList} title='조건에 맞는 코스가 없어요.' description='올바른 검색어가 맞는지 다시 한 번 확인해 주세요.' />
			) : (
				<div className={styles.courseList}>
					{courses.map((course) => (
						<CourseItem key={course.id} course={course} />
					))}
				</div>
			)}
		</ListPage>
	);
}

export default CourseListPage;
