import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerActions } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';

//Components
import PatientSideBar from './components/PatientSideBar'
import ProfessionalSideBar from './components/ProfessionalSideBar'

//Pages
import SignIn from './pages/SignIn'
import AuthLoadingScreen from './pages/AuthLoadingScreen'
import PrSignUp from './pages/ProfessionalScreens/SignUp'
import PaSignUp from './pages/PatientScreens/SignUp'
import PaTermsAndConditions from './pages/PatientScreens/TermsAndConditions'
import PrTermsAndConditions from './pages/ProfessionalScreens/TermsAndConditions'
import UploadCurriculum from './pages/ProfessionalScreens/UploadCurriculum'
import CurriculumViewer from './pages/ProfessionalScreens/CurriculumViewer' 
import PrForgotPassword from './pages/ProfessionalScreens/ForgotPassword'
import PaForgotPassword from './pages/PatientScreens/ForgotPassword'
import PrResetPassword from './pages/ProfessionalScreens/ResetPassword'
import PaResetPassword from './pages/PatientScreens/ResetPassword'
import PaHomeMenu from './pages/PatientScreens/HomeMenu'
import PrHomeMenu from './pages/ProfessionalScreens/HomeMenu'
import PaHelp from './pages/PatientScreens/Help'
import Payments from './pages/PatientScreens/Payments'
import PreviousAppointments from './pages/PatientScreens/PreviousAppointments'
import PaSchedules from './pages/PatientScreens/Schedules'
import PaUserSettings from './pages/PatientScreens/UserSettings'
import Curriculum from './pages/ProfessionalScreens/Curriculum'
import PrSchedules from './pages/ProfessionalScreens/Schedules'
import PrHelp from './pages/ProfessionalScreens/Help'
import Messages from './pages/ProfessionalScreens/Messages'
import Extract from './pages/ProfessionalScreens/Extract'
import PrUserSettings from './pages/ProfessionalScreens/UserSettings'

//Routes
const PatientDrawer = createDrawerNavigator({
  PaHomeMenu: {
    screen: PaHomeMenu,
      navigationOptions: () =>
      ({
        title: 'Home'
      })
  },
  PreviousAppointments: {
    screen: PreviousAppointments,
    navigationOptions: () => 
    ({
      title: 'Atendimentos Anteriores'
    })
  },    
  PaSchedules: {
    screen: PaSchedules,
    navigationOptions: () => 
    ({
      title: 'Agendamentos'
    })
  },    
  PaHelp: {
    screen: PaHelp,
    navigationOptions: () => 
    ({
      title: 'Ajuda'
    })
  },    
  Payments: {
    screen: Payments,
    navigationOptions: () => 
    ({
      title: 'Pagamentos'
    })
  },    
  PaUserSettings: {
    screen: PaUserSettings,
    navigationOptions: () => 
    ({
      title: 'Configurações'
    })
  },    
}, {
  initialRouteName: 'PaHomeMenu',
  contentComponent: PatientSideBar
});

const ProfessionalDrawer = createDrawerNavigator({
  PrHomeMenu: {
    screen: PrHomeMenu,
      navigationOptions: () =>
      ({
        title: 'Home'
      })
  },
  Curriculum: {
    screen: Curriculum,
    navigationOptions: () => 
    ({
      title: 'Currículo'
    })
  },    
  PrSchedules: {
    screen: PrSchedules,
    navigationOptions: () => 
    ({
      title: 'Agendamentos'
    })
  },    
  Messages: {
    screen: Messages,
    navigationOptions: () => 
    ({
      title: 'Mensagens'
    })
  },    
  Extract: {
    screen: Extract,
    navigationOptions: () => 
    ({
      title: 'Extrato'
    })
  },    
  PrHelp: {
    screen: PrHelp,
    navigationOptions: () => 
    ({
      title: 'Ajuda'
    })
  },    
  PrUserSettings: {
    screen: PrUserSettings,
    navigationOptions: () => 
    ({
      title: 'Configurações'
    })
  },    
}, {
  initialRouteName: 'PrHomeMenu',
  contentComponent: ProfessionalSideBar
});

export default createAppContainer(
  createSwitchNavigator({
    SignIn,
    PaSignUp,
    PrSignUp,
    PaTermsAndConditions,
    PrTermsAndConditions,
    UploadCurriculum,
    CurriculumViewer,
    PaForgotPassword,
    PrForgotPassword,
    PaResetPassword,
    PrResetPassword,
    PatientDrawer,
    ProfessionalDrawer,
    })
);
