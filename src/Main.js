import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';
import HomePage from './pages/HomePage';
import CoursePage from './pages/CoursePage';
import CourseListPage from './pages/CourseListPage';
import WishlistPage from './pages/WishlistPage';

function Main() {
	return (
		<BrowserRouter>
			<App>
				<Routes>
					<Route path='/' element={<HomePage />} />
					{/* / 링크가 들어오면 HomePage 컴포넌트를 보여주기 jsx를 넘겨주는 것 */}
					<Route path='courses' element={<CourseListPage />} />
					<Route path='courses/react-fronted-development' element={<CoursePage />} />
					<Route path='wishlist' element={<WishlistPage />} />
				</Routes>
			</App>
		</BrowserRouter>
	);
}

export default Main;
