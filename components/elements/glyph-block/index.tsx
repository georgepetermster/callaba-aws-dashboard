import React from 'react';
import {DIRECTORY_GLYPH_IMAGE} from "../../../app-constants";

export default function GlyphBlock({image, children}) {
    return (
        <div className={'glyph-block'}>
            <div className={'glyph-block__flexContainer'}>
                <div className={'glyph-block__flexItem'}>
                    <div className={'glyph-block__image'}>
                        <img src={`${image}.svg`}/>
                    </div>
                </div>
                <div className={'glyph-block__flexItem'}>
                    {children}
                </div>
            </div>
        </div>
    );
}
