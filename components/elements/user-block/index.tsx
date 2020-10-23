import React from 'react';
import GlyphBlock from '../glyph-block';
import {DIRECTORY_USER_IMAGE} from "../../../app-constants";

export default function UserBlock({image = 'no-image', name, email}) {
    return (
        <GlyphBlock image={`${DIRECTORY_USER_IMAGE}/${image}`}>
            <div>{name}</div>
            <div>{email}</div>
        </GlyphBlock>
    );
}
