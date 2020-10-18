import React from "react";
import Default from '../../components/layouts/default'
import Modal from "../../components/elements/modal";
import Logotype from "../../components/elements/logotype/logotype";
import BlockHeader from "../../components/elements/block-header";
import {withTranslation, Trans, Link} from "../../i18n";
import PropTypes from "prop-types";
import FormInputText from "../../components/elements/form-input-text";
import FormButton from "../../components/elements/form-button";
import BlockContent from "../../components/elements/block-content";

function Signup({t}) {
    return (
        <Default home={false}>
            <div>
                <Modal>
                    <div className={'signup'}>
                        <Logotype/>
                        <div className={'signup__header'}>
                            <BlockHeader text={t("signup-header")} size={1}/>
                        </div>
                        <div className={"signup__formElement"}>
                            <FormInputText placeholder={t('signup-name')}/>
                        </div>
                        <div className={'signup__formElement'}>
                            <FormInputText placeholder={t('signup-email')}/>
                        </div>
                        <div className={'signup__formElement'}>
                            <FormInputText placeholder={t('signup-password')} type={'password'}/>
                        </div>
                        <div className={'signup__formElement signup__submitButton'}>
                            <FormButton text={t('signup-button')}></FormButton>
                        </div>
                        <div className={'signup__terms'}>
                            <BlockContent>
                                <Trans i18nKey='signup-terms'>
                                    <a href={'/static-pages/terms'}>Terms of Service</a>
                                    <a href={'/static-pages/privacy'}>Privacy Policy</a>
                                </Trans>
                            </BlockContent>
                        </div>
                    </div>
                </Modal>
            </div>
        </Default>
    )
}

Signup.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

Signup.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Signup)
