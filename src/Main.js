import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';
import HomePage from './pages/HomePage';
import CoursePage from './pages/CoursePage';
import CourseListPage from './pages/CourseListPage';
import WishlistPage from './pages/WishlistPage';
import QuestionPage from './pages/QuestionPage';
import QuestionListPage from './pages/QuestionListPage';

function Main() {
	return (
		<BrowserRouter>
			<Routes path='/' element={<App />}>
				<Route index element={<HomePage />} />
				<Route path='courses'>
					<Route index element={<CourseListPage />} />
					<Route path='react-fronted-development' element={<CoursePage />} />
				</Route>
				<Route path='questions' element={<QuestionListPage />} />
				<Route path='questions/616825' element={<QuestionPage />} />
				<Route path='wishlist' element={<WishlistPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Main;
