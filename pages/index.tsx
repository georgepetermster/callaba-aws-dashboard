import PropTypes from 'prop-types'
import {withTranslation} from '../i18n'
import Default from '../components/layouts/default'

const Home = function ({t}) {
    return (
        <Default home>
            <div>
                {t('signup-block-header')}
            </div>
        </Default>
    )
};
Home.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

Home.propTypes = {
    t: PropTypes.func.isRequired,
}
export default withTranslation('common')(Home);
