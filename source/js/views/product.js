export default ( instance ) => {
    const item = instance.data.item;
    const variant = item.structuredContent.variants[ 0 ];
    // const digital = item.digitalGoods;
    const formatTitle = ( title ) => {
        return title.replace( /\s\(/, "<br />(" );
    };

    return `
        <div class="stack">
            <div class="stack__item">
                <div class="sqs-block-spacer"><div class="sqs-block-content"></div></div>
                <div class="stack__link">
                    <div class="stack__mast -center-text">
                        <div class="stack__primo">
                            <div class="stack__title" data-content-field="title"><h1>${formatTitle( item.title )}</h1></div>
                            <div class="stack__meta"><h1><em>$${variant.priceMoney.value}</em></h1></div>
                        </div>
                    </div>
                    <div class="-wrap">
                        <img class="stack__image image js-lazy-image" data-img-src="${item.assetUrl}" data-variants="${item.systemDataVariants}" data-original-size="${item.originalSize}" />
                    </div>
                </div>
            </div>
        </div>
        <div class="product__details">
            <div class="product__photos">
                ${item.items.map(( image ) => {
                    return `
                        <img class="stack__image image js-lazy-image" data-img-src="${image.assetUrl}" data-variants="${image.systemDataVariants}" data-original-size="${image.originalSize}" />
                    `;

                }).join( "" )}
            </div>
            <div class="product__info cms">
                <div class="product__buy">
                    <a class="btn js-cart-add" href="#"><span class="btn__a">${item.structuredContent.customAddButtonText}</span></a>
                </div>
                <div class="product__about">
                    ${item.body}
                </div>
            </div>
        </div>
    `;
};
