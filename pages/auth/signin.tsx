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
                    <div className={'form'}>
                        <Logotype/>
                        <div className={'form__header'}>
                            <BlockHeader text={t("signin-header")} size={1}/>
                        </div>
                        <div className={'form__formElement'}>
                            <FormInputText placeholder={t('signin-email')}/>
                        </div>
                        <div className={'form__formElement'}>
                            <FormInputText placeholder={t('signin-password')} type={'password'}/>
                        </div>
                        <div className={'form__formElement form__submitButton'}>
                            <FormButton text={t('signin-submitButton')}></FormButton>
                        </div>
                        <div className={"signin__forgotText"}>
                            <BlockContent>
                                <Trans i18nKey={'signin-forgotText'}>
                                    <a href={'/auth/forgot'}>Forgot your password?</a>
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
