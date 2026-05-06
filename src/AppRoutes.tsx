import { Routes, Route } from 'react-router-dom';
import HomePage from './routes/index';
import AboutPage from './routes/about';
import ContactPage from './routes/contact';
import EventsPage from './routes/events';
import GalleryPage from './routes/gallery';
import PublicationsPage from './routes/publications';
import LoginRedirect from './routes/login';
import AdminLayout from './routes/admin';
import AdminDashboard from './routes/admin.index';
import AdminLogin from './routes/admin.login';
import AboutManagement from './routes/admin.about-management';
import AlbumsManagement from './routes/admin.albums';
import EventsManagement from './routes/admin.events';
import PublicationsManagement from './routes/admin.publications';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/publications" element={<PublicationsPage />} />
      <Route path="/login" element={<LoginRedirect />} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="login" element={<AdminLogin />} />
        <Route path="about-management" element={<AboutManagement />} />
        <Route path="albums" element={<AlbumsManagement />} />
        <Route path="events" element={<EventsManagement />} />
        <Route path="publications" element={<PublicationsManagement />} />
      </Route>
    </Routes>
  );
}