import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import UserTable from "./components/user_table/UserTable";
import HomePage from "./pages/home_page/HomePage";
import UserDetail from "./pages/UserDetail";
import GraphDetail from "./pages/graph_detail/GraphDetail";
import NavBar from "./components/nav_bar/NavBar";
import styles from "./App.module.css";
import SearchPage from "./pages/search_page/SearchPage";
import DrawGraph from "./pages/draw_graph/DrawGraph";
import PublicationPage from "./pages/publication_page/PublicationPage";
import GraphResultsPage from "./pages/graph_results_page/GraphResultsPage";
import MetaDirectory from "./pages/meta_directory/MetaDirectory";
import AlmostHypohamiltonian from "./pages/meta_directory/graph_directories/AlmostHypohamiltonian";
import AlternatingPlane from "./pages/meta_directory/graph_directories/AlternatingPlane";
import CoGraphs from "./pages/meta_directory/graph_directories/CoGraphs";
import CriticalHFree from "./pages/meta_directory/graph_directories/CriticalHFree";
import Cubic from "./pages/meta_directory/graph_directories/Cubic";
import Fullerenes from "./pages/meta_directory/graph_directories/Fullerenes";
import Hypohamiltonian from "./pages/meta_directory/graph_directories/Hypohamiltonian";
import MaximalTriangleFree from "./pages/meta_directory/graph_directories/MaximalTriangleFree";
import MinimalCayley from "./pages/meta_directory/graph_directories/MinimalCayley";
import MinimalRamsey from "./pages/meta_directory/graph_directories/MinimalRamsey";
import Nut from "./pages/meta_directory/graph_directories/Nut";
import Perihamiltonian from "./pages/meta_directory/graph_directories/Perihamiltonian";
import Planar from "./pages/meta_directory/graph_directories/Planar";
import Platypus from "./pages/meta_directory/graph_directories/Platypus";
import RamseyNumbers from "./pages/meta_directory/graph_directories/RamseyNumbers";
import Quartic from "./pages/meta_directory/graph_directories/Quartic";
import Snarks from "./pages/meta_directory/graph_directories/Snarks";
import Trees from "./pages/meta_directory/graph_directories/Trees";
import TriangleFreeKChromatic from "./pages/meta_directory/graph_directories/TriangleFreeKChromatic";
import UniquelyHamiltonian from "./pages/meta_directory/graph_directories/UniquelyHamiltonian";
import Store from "./app/Store";
import {Provider} from "react-redux";
import LoginPage from "./pages/account_page/LoginPage";
import RegisterPage from "./pages/account_page/RegisterPage";
import ProfilePage from "./pages/profile_page/ProfilePage";
import NotFoundPage from "./pages/not_found_page/NotFoundPage";
import ProtectedRoute from "./ProtectedRoute";
import UnauthorizedPage from "./pages/unauthorized_page/UnauthorizedPage";
import {UserRole} from "./entities/UserRole";
import VerificationPage from "./pages/verification_page/VerificationPage";
import ForgotPasswordPage from "./pages/account_page/ForgotPasswordPage";
import ResetPasswordPage from "./pages/account_page/ResetPasswordPage";
import AddGraphDrawing from "./pages/add_graph/AddGraphDrawing";
import AddGraphDetails from "./pages/add_graph/AddGraphDetails";
import AddGraph from "./pages/add_graph/AddGraph";
import AddGraphFile from "./pages/add_graph/AddGraphFile";
import HelpPage from "./pages/help_page/HelpPage";
import SearchHistory from "./pages/search_history/SearchHistory";
import EditProfile from "./pages/edit_profile/EditProfile";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Provider store={Store}>
      <Router>
        <NavBar />
        <div className={ `container ${styles.container}` }>
          <Routes>
            <Route path={'/'} element={<HomePage/>}/>
            <Route path={'/users'} element={<ProtectedRoute neededRole={UserRole.Admin}><UserTable/></ProtectedRoute>}/>
            <Route path={'/users/:id'} element={<ProtectedRoute neededRole={UserRole.Admin}><UserDetail/></ProtectedRoute>}/>
            <Route path={'/graphs/:id'} element={<GraphDetail/>}/>
            <Route path={'/search'} element={<SearchPage/>}/>
            <Route path={'/search_history'} element={<SearchHistory/>}/>
            <Route path={'/help'} element={<HelpPage/>}/>
            <Route path={'/draw-graph'} element={<DrawGraph/>}/>
            <Route path={'/publications'} element={<PublicationPage/>}/>
            <Route path={'/result-graphs'} element={<GraphResultsPage/>}/>
            <Route path={'/meta-directory'} element={<MetaDirectory/>}/>
            <Route path={'/login'} element={<LoginPage/>}/>
            <Route path={'/register'} element={<RegisterPage/>}/>
            <Route path={'/profile'} element={<ProtectedRoute><ProfilePage/></ProtectedRoute>}/>
            <Route path={'/edit_profile'} element={<ProtectedRoute><EditProfile/></ProtectedRoute>}/>
            <Route path={'/verify'} element={<VerificationPage/>}/>
            <Route path={'/forgot_password'} element={<ForgotPasswordPage/>}/>
            <Route path={'/reset_password'} element={<ResetPasswordPage/>}/>
            <Route path={'/add_graph'} element={<ProtectedRoute><AddGraph/></ProtectedRoute>}/>
            <Route path={'/add_graph_drawing'} element={<ProtectedRoute><AddGraphDrawing/></ProtectedRoute>}/>
            <Route path={'/add_graph_file'} element={<ProtectedRoute><AddGraphFile/></ProtectedRoute>}/>
            <Route path={'/add_graph_details'} element={<ProtectedRoute><AddGraphDetails/></ProtectedRoute>}/>
            {/* Meta-directory routes */}
            <Route path={'/meta-directory/almost-hypohamiltonian'} element={<AlmostHypohamiltonian/>}/>
            <Route path={'/meta-directory/alternating-plane-graphs'} element={<AlternatingPlane/>}/>
            <Route path={'/meta-directory/cographs'} element={<CoGraphs/>}/>
            <Route path={'/meta-directory/critical-h-free'} element={<CriticalHFree/>}/>
            <Route path={'/meta-directory/cubic'} element={<Cubic/>}/>
            <Route path={'/meta-directory/fullerenes'} element={<Fullerenes/>}/>
            <Route path={'/meta-directory/hypohamiltonian'} element={<Hypohamiltonian/>}/>
            <Route path={'/meta-directory/maximal-triangle-free'} element={<MaximalTriangleFree/>}/>
            <Route path={'/meta-directory/minimal-cayley'} element={<MinimalCayley/>}/>
            <Route path={'/meta-directory/minimal-ramsey'} element={<MinimalRamsey/>}/>
            <Route path={'/meta-directory/minimal-ramsey'} element={<MinimalRamsey/>}/>
            <Route path={'/meta-directory/nut'} element={<Nut/>}/>
            <Route path={'/meta-directory/perihamiltonian'} element={<Perihamiltonian/>}/>
            <Route path={'/meta-directory/planar'} element={<Planar/>}/>
            <Route path={'/meta-directory/platypus'} element={<Platypus/>}/>
            <Route path={'/meta-directory/ramsey-numbers'} element={<RamseyNumbers/>}/>
            <Route path={'/meta-directory/quartic'} element={<Quartic/>}/>
            <Route path={'/meta-directory/snarks'} element={<Snarks/>}/>
            <Route path={'/meta-directory/trees'} element={<Trees/>}/>
            <Route path={'/meta-directory/triangle-free-k-chromatic'} element={<TriangleFreeKChromatic/>}/>
            <Route path={'/meta-directory/uniquely-hamiltonian'} element={<UniquelyHamiltonian/>}/>
            <Route path={'/unauthorized'} element={<UnauthorizedPage/>}/>
            <Route path={'/notfound'} element={<NotFoundPage/>}/>
            <Route path={'*'} element={<NotFoundPage/>}/>
          </Routes>
        </div>
        <ToastContainer />
      </Router>
      <br/>
    </Provider>
  );
}

export default App;
