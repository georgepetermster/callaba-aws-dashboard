import React from 'react';
import Logotype from '../../elements/logotype/logotype';
import UserBlock from "../../elements/user-block";
import GlyphBlock from "../../elements/glyph-block";
import {withTranslation} from "../../../i18n";
import {DIRECTORY_GLYPH_IMAGE} from "../../../app-constants";
import PropTypes from "prop-types";

function MenuVertical({t}) {
    return (
        <div className={'menu-vertical'}>
            <div className={'menu-vertical__logoBlock'}>
                <Logotype/>
            </div>
            <div className={'menu-vertical__userBlock'}>
                <UserBlock name={'Arnold Schwarzenegger'} email={'example@testest.com'}/>
            </div>
            <div className={'menu-vertical__servicesBlock'}>
                <div className={'menu-vertical__servicesBlockItem'}>
                    <GlyphBlock image={`${DIRECTORY_GLYPH_IMAGE}/streaming-servers`}>
                        <div>{t('menu-vertical-srt-streaming')}</div>
                    </GlyphBlock>
                    <GlyphBlock image={`${DIRECTORY_GLYPH_IMAGE}/srt-conferences`}>
                        <div>{t('menu-vertical-srt-conferences')}</div>
                    </GlyphBlock>
                    <GlyphBlock image={`${DIRECTORY_GLYPH_IMAGE}/WebRTC-conferences`}>
                        <div>{t('menu-vertical-webrtc-conferences')}</div>
                    </GlyphBlock>
                </div>

            </div>
        </div>
    )
}

MenuVertical.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

MenuVertical.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('common')(MenuVertical)
