import React from "react";
import DefaultLayout from '../../components/layouts/defaultLayout'
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
        <DefaultLayout home={false}>
            <div>
                <Modal>
                    <div className={'form'}>
                        <Logotype/>
                        <div className={'form__header'}>
                            <BlockHeader text={t("signup-header")} size={1}/>
                        </div>
                        <div className={"form__formElement"}>
                            <FormInputText placeholder={t('signup-name')}/>
                        </div>
                        <div className={'form__formElement'}>
                            <FormInputText placeholder={t('signup-email')}/>
                        </div>
                        <div className={'form__formElement'}>
                            <FormInputText placeholder={t('signup-password')} type={'password'}/>
                        </div>
                        <div className={'form__formElement form__submitButton'}>
                            <FormButton text={t('signup-submitButton')}></FormButton>
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
        </DefaultLayout>
    )
}

Signup.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

Signup.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Signup)
