import { 
    ABOUT_ROUTE, 
    ABITURIENTS_ROUTE, 
    NEWS_ROUTE, 
    CONTACT_ROUTE, 
    PARTNERS_ROUTE, 
    STUDENTS_ROUTE, 
    EDUCATION_ROUTE, 
    EMPLOYEES_ROUTE, 
    INDEX_ROUTE, 
    STRUCTURE_ROUTE, 
    DOCUMENTS_ROUTE, 
    PAIDSERVICE_ROUTE, 
    PROFESSORS_ROUTE, 
    TECHSUPPORT_ROUTE, 
    CURRICULUM_ROUTE,
    STANDARTS_ROUTE,
    COURSES_ROUTE,
    OPENDOORS_ROUTE,
    ABIMATERIALS_ROUTE,
    PAY_ROUTE,
    CURATORS_ROUTE,
    STUMATERIALS_ROUTE,
    EMPLOYMENT_ROUTE,
    ADVOCATE_ROUTE,
    CREDIT_ROUTE,
    DESIGN_ROUTE,
    DOCTOR_ROUTE,
    PRESCHOOL_ROUTE,
    TEACHER_ROUTE,
    PHARMACIST_ROUTE,
    HYMN_ROUTE,
    PRINCIPLES_ROUTE,
    RECEPTION_ROUTE,
    ADDITIONAL_ROUTE,
    FINANCE_ROUTE,
    ENVIRONMENT_ROUTE,
    LICENSE_ROUTE,
    OPENNESS_ROUTE,
    PRACTICE_ADVOCATE_ROUTE,
    PRACTICE_CREDIT_ROUTE,
    PRACTICE_DESIGN_ROUTE,
    PRACTICE_DOCTOR_ROUTE,
    PRACTICE_PHARMACIST_ROUTE,
    PRACTICE_TEACHER_ROUTE,
    PRACTICE_PRESCHOOL_ROUTE,
    BLIND_ROUTE,
} from "./utils/consts.js"
import About from './pages/About.jsx'
import Abiturients from "./pages/Abiturients.jsx"
import News from "./pages/News.jsx"
import Contact from "./pages/Contact.jsx"
import Partners from "./pages/Partners.jsx"
import Students from "./pages/Students.jsx"
import Education from "./pages/Education.jsx"
import Employees from "./pages/Employees.jsx"
import Index from "./pages/Index.jsx"
import Structure from "./pages/Structure.jsx"
import Documents from "./pages/Documents.jsx"
import PaidService from "./pages/PaidService.jsx"
import Professors from "./pages/Professors.jsx"
import TechSupport from "./pages/TechSupport.jsx"
import CurriculumGraffic from "./pages/CurriculumGraffic.jsx"
import StandartsEdu from "./pages/StandartsEdu.jsx"
import Courses from "./pages/Courses.jsx"
import OpenDoors from "./pages/OpenDoors.jsx"
import AbiMaterials from "./pages/AbiMaterials.jsx"
import Pay from "./pages/Pay.jsx"
import Curators from "./pages/Curators.jsx"
import StuMaterials from "./pages/StuMaterials.jsx"
import Employment from "./pages/Employment.jsx"
import Advocate from "./pages/Advocate.jsx"
import Credit from "./pages/Credit.jsx"
import Teacher from "./pages/Teacher.jsx"
import Preschool from "./pages/Preschool.jsx"
import Doctor from "./pages/Doctor.jsx"
import Design from "./pages/Design.jsx"
import Pharmacist from "./pages/Pharmacist.jsx"
import Hymn from "./pages/Hymn.jsx"
import Principles from "./pages/Principles.jsx"
import Reception from "./pages/Reception.jsx"
import AdditionalEducation from "./pages/AdditionalEducation.jsx"
import Finance from "./pages/Finance.jsx"
import Environment from "./pages/Environment.jsx"
import License from './pages/License.jsx'
import Openness from './pages/Openness.jsx'
import PracticeAdvocate from './pages/pracDocsPages/PracticeAdvocate.jsx'
import PracticeCredit from './pages/pracDocsPages/PracticeCredit.jsx'
import PracticeDesign from './pages/pracDocsPages/PracticeDesign.jsx'
import PracticePharmacist from './pages/pracDocsPages/PracticePharmacist.jsx'
import PracticePreschool from './pages/pracDocsPages/PracticePreschool.jsx'
import PracticeTeacher from './pages/pracDocsPages/PracticeTeacher.jsx'
import PracticeDoctor from './pages/pracDocsPages/PracticeDoctor.jsx'
import Blind from "./pages/Blind/Blind.jsx"

export const publicRoutes = [
    {
        path: ABOUT_ROUTE,
        Component: About,
        title: 'ЗНАНИЕ | Основные сведения'
    },
    {
        path: ABITURIENTS_ROUTE,
        Component: Abiturients,
        title: 'ЗНАНИЕ | Абитуриентам'
    },
    {
        path: NEWS_ROUTE,
        Component: News,
        title: 'ЗНАНИЕ | Новости'
    },
    {
        path: CONTACT_ROUTE,
        Component: Contact,
        title: 'ЗНАНИЕ | Контакты'
    },
    {
        path: PARTNERS_ROUTE,
        Component: Partners,
        title: 'ЗНАНИЕ | Партнеры'
    },
    {
        path: STUDENTS_ROUTE,
        Component: Students,
        title: 'ЗНАНИЕ | Студентам'
    },
    {
        path: EDUCATION_ROUTE,
        Component: Education,
        title: 'ЗНАНИЕ | Образование'
    },
    {
        path: EMPLOYEES_ROUTE,
        Component: Employees,
        title: 'ЗНАНИЕ | Сотрудники'
    },
    {
        path: INDEX_ROUTE,
        Component: Index,
        title: 'ЗНАНИЕ | Колледж'
    },
    {
        path: STRUCTURE_ROUTE,
        Component: Structure,
        title: 'ЗНАНИЕ | Структура и органы управления'
    },
    {
        path: DOCUMENTS_ROUTE,
        Component: Documents,
        title: 'ЗНАНИЕ | Официальные документы'
    },
    {
        path: PAIDSERVICE_ROUTE,
        Component: PaidService,
        title: 'ЗНАНИЕ | Платные образовательные услуги'
    },
    {
        path: PROFESSORS_ROUTE,
        Component: Professors,
        title: 'ЗНАНИЕ | Педагогический состав'
    },
    {
        path: TECHSUPPORT_ROUTE,
        Component: TechSupport,
        title: 'ЗНАНИЕ | Материальное техническое обеспечение и оснащенность образовательного процесса'
    }, 
    {
        path: CURRICULUM_ROUTE,
        Component: CurriculumGraffic,
        title: 'ЗНАНИЕ | Учебные планы'
    },
    {
        path: STANDARTS_ROUTE,
        Component: StandartsEdu,
        title: 'ЗНАНИЕ | Образовательные стандарты и требования'

    },
    {
        path: COURSES_ROUTE,
        Component: Courses,
        title: 'ЗНАНИЕ | Подготовительные курсы'
    },
    {
        path: OPENDOORS_ROUTE,
        Component: OpenDoors,
        title: 'ЗНАНИЕ | Дни открытых дверей'
    },
    {
        path: ABIMATERIALS_ROUTE,
        Component: AbiMaterials,
        title: 'ЗНАНИЕ | Дополнительные материалы'
    },
    {
        path: PAY_ROUTE,
        Component: Pay,
        title: 'ЗНАНИЕ | Оплата обучения'
    },
    {
        path: CURATORS_ROUTE,
        Component: Curators,
        title: 'ЗНАНИЕ | Кураторы групп'
    },
    {
        path: STUMATERIALS_ROUTE,
        Component: StuMaterials,
        title: 'ЗНАНИЕ | Дополнительные материалы'
    },
    {
        path: EMPLOYMENT_ROUTE,
        Component: Employment,
        title: 'ЗНАНИЕ | Трудоустройство'
    },
    {
        path: ADVOCATE_ROUTE,
        Component: Advocate,
        title: 'ЗНАНИЕ | Право'
    },
    {
        path: CREDIT_ROUTE,
        Component: Credit,
        title: 'ЗНАНИЕ | Бухгалтер'
    },
    {
        path: TEACHER_ROUTE,
        Component: Teacher,
        title: 'ЗНАНИЕ | Учитель начальных классов'
    },
    {
        path: PRESCHOOL_ROUTE,
        Component: Preschool,
        title: 'ЗНАНИЕ | Дошкольное образование'
    },
    {
        path: DOCTOR_ROUTE,
        Component: Doctor,
        title: 'ЗНАНИЕ | Сестринское дело'
    },
    {
        path: DESIGN_ROUTE,
        Component: Design,
        title: 'ЗНАНИЕ | Дизайн'
    },
    {
        path: PHARMACIST_ROUTE,
        Component: Pharmacist,
        title: 'ЗНАНИЕ | Фармация'
    },
    {
        path: HYMN_ROUTE,
        Component: Hymn,
        title: 'ЗНАНИЕ | Гимн колледжа'
    },
    {
        path: PRINCIPLES_ROUTE,
        Component: Principles,
        title: 'ЗНАНИЕ | Наши принципы'
    },
    {
        path: RECEPTION_ROUTE,
        Component: Reception,
        title: 'ЗНАНИЕ | Приемная комиссия'
    },
    {
        path: ADDITIONAL_ROUTE,
        Component: AdditionalEducation,
        title: 'ЗНАНИЕ | Дополнительное образование'
    },
    {
        path: FINANCE_ROUTE,
        Component: Finance,
        title: 'ЗНАНИЕ | Финансово-хозяйственная деятельность'
    },
    {
        path: ENVIRONMENT_ROUTE,
        Component: Environment,
        title: 'ЗНАНИЕ | Доступная среда'
    },
    {
        path: OPENNESS_ROUTE,
        Component: Openness,
        title: 'ЗНАНИЕ | Информационная открытость'
    },
    {
        path: LICENSE_ROUTE,
        Component: License,
        title: 'ЗНАНИЕ | Устав, лицензия, аккредитация'
    },
    {
        path: PRACTICE_ADVOCATE_ROUTE,
        Component: PracticeAdvocate,
        title: 'ЗНАНИЕ | Практика юрист'
    },
    {
        path: PRACTICE_CREDIT_ROUTE,
        Component: PracticeCredit,
        title: 'ЗНАНИЕ | Практика бухгалтер'
    },
    {
        path: PRACTICE_DESIGN_ROUTE,
        Component: PracticeDesign,
        title: 'ЗНАНИЕ | Практика дизайн'
    },
    {
        path: PRACTICE_PHARMACIST_ROUTE,
        Component: PracticePharmacist,
        title: 'ЗНАНИЕ | Практика фармация'
    },
    {
        path: PRACTICE_DOCTOR_ROUTE,
        Component: PracticeDoctor,
        title: 'ЗНАНИЕ | Практика сестринское дело'
    },
    {
        path: PRACTICE_PRESCHOOL_ROUTE,
        Component: PracticePreschool,
        title: 'ЗНАНИЕ | Практика дошкольное образование'
    },
    {
        path: PRACTICE_TEACHER_ROUTE,
        Component: PracticeTeacher,
        title: 'ЗНАНИЕ | Практика преподаватель начальных классов'
    },
    {
        path: BLIND_ROUTE,
        Component: Blind,
        title: 'ЗНАНИЕ | Версия для слабовидящих'
    }

]

export const authRoutes = [

]