import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom'
import {AiOutlineHome,AiOutlineInsurance,AiOutlineSetting} from 'react-icons/ai';
import {BiMessageDetail,BiGitBranch} from 'react-icons/bi';
import {GiFireworkRocket} from 'react-icons/gi';
import {GrGallery,GrUserSettings} from 'react-icons/gr';
import {HiOutlineUserGroup,HiOutlineNewspaper} from 'react-icons/hi';
import {BsFillHeartPulseFill} from 'react-icons/bs';
import {CgNotes} from 'react-icons/cg';
import {FaUserMd,FaWpforms} from 'react-icons/fa';
import {TbReportSearch,TbSeo} from 'react-icons/tb';
import {VscFeedback} from 'react-icons/vsc';
import {MdOutlineFolderSpecial,MdEventAvailable,MdContactPage,MdOutlineContactPage} from 'react-icons/md';
import {RiDashboard3Line,RiUserSettingsLine} from 'react-icons/ri';
import {TbMedicalCrossFilled,TbUsers} from 'react-icons/tb';
import {Menu} from 'antd';


function SideBar() {
  const navigate = useNavigate()

  return (
    <>
    <nav className='h-screen xs:w-24 md:w-64 fixed overflow-y-hidden transition-all duration-200 ease-in z-50'>
      <span className='flex gap-2 bg-white border border-b-gray-300  z-50 fixed xs:w-24 md:w-64 top-0 left-0 items-center h-20 justify-center'>
        <TbMedicalCrossFilled className='text-3xl text-blue-500'/>
        <h1 className='font-semibold text-2xl xs:hidden md:block'>LOGO</h1>
      </span>

      <div className='pt-24 pl-5  w-full h-full font-medium text-gray-500 overflow-y-scroll  side-menu'>
          <Menu className='xs:text-xs md:text-sm'
          onClick={({key})=>{
            navigate(key)
          }} 
          defaultSelectedKeys={[window.location.pathname]}
          items={[
            {label:'Dashboard',key:'/dashboard',icon:<RiDashboard3Line />,},
            {label:'Appointmnets',key:'/admin/appointments',icon:<CgNotes/>},
            {label:'Specialities',key:'/admin/specialities',icon:<MdOutlineFolderSpecial/>},
            {label:'Doctors',key:'/admin/doctors',icon:<FaUserMd/>},
            {label:'Messages',icon:<BiMessageDetail/>,
            children:[
              {label:'Enquiry',key:'/admin/enquiry',icon:<TbReportSearch/>},
              {label:'Feedback',key:'/admin/feedback',icon:<VscFeedback/>},
            ]},
            {label:'Health Checkups',key:'/admin/health-checkup',icon:<BsFillHeartPulseFill/>},
            {label:'Careers',icon:<GiFireworkRocket/>,
            children:[
              {label:'Applications',key:'/admin/applications',icon:<FaWpforms/>},
              {label:'Vacancies',key:'/admin/vacancies',icon:<MdEventAvailable/>},
            ]},
            {label:'Pages',icon:<MdContactPage/>,
            children:[
              {label:'Home',key:'/admin/home',icon:<AiOutlineHome/>},
              {label:'About us',key:'/admin/about-us',icon:<MdOutlineContactPage/>},
            ]},
            {label:'News & Updates',key:'/admin/news-updates',icon:<HiOutlineNewspaper/>},
            {label:'Insurance Partners',key:'/admin/insurance-partners',icon:<AiOutlineInsurance/>},
            {label:'Testimonial',key:'/admin/testimonials',icon:<HiOutlineUserGroup/>},
            {label:'Gallery',key:'/admin/gallery',icon:<GrGallery/>},
            {label:'Settings',icon:<AiOutlineSetting/>,
            children:[
              {label:'General',key:'/admin/general',icon:<GrUserSettings/>},
              {label:'Users',key:'/admin/users',icon:<TbUsers/>},
              {label:'Branches',key:'/admin/branches',icon:<BiGitBranch/>},
              {label:'User Role',key:'/admin/user-role',icon:<RiUserSettingsLine/>},
              {label:'SEO Tool',key:'/admin/seo',icon:<TbSeo/>},
            ]},
          ]}>

          </Menu>
      </div>
    </nav>
    </>
  )
}

export default SideBar