import PropTypes from 'prop-types'
import {withTranslation} from '../i18n'
import DefaultLayout from '../components/layouts/defaultLayout'

const Home = function ({t}) {
    return (
        <DefaultLayout home>
            <div>
                {t('signup-block-header')}
            </div>
        </DefaultLayout>
    )
};
Home.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

Home.propTypes = {
    t: PropTypes.func.isRequired,
}
export default withTranslation('common')(Home);
