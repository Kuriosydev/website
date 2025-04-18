import EducatorLayout from '@/app/educators/EducatorLayout'
import ComingSoon from '../../../components/pages/ComingSoon'

export default function Curriculum() {
    return (
        <EducatorLayout>
            <ComingSoon
                heading="Hang Tight!"
                description="Our curriculum is almost ready. We’re putting the finishing touches on it and can’t wait to share it with you. Stay tuned!"
            />
        </EducatorLayout>
    )
}
