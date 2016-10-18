function _random_id() {
    return Math.random().toString(36).substring(10);
}

function invoice_template_json() {
    return {
        "name": "Hours Template_" + _random_id(),
        "default": true,
        "unit_of_measure": "HOURS",
        "template_data": {
            "items": [{
                "name": "Nutri Bullet",
                "quantity": 1,
                "unit_price": {
                    "currency": "USD",
                    "value": "50.00"
                }
            }],
            "merchant_info": {
                "email": "PPX.DevNet-facilitator@gmail.com"
            },
            "tax_calculated_after_discount": false,
            "tax_inclusive": false,
            "note": "Thank you for your business.",
            "logo_url": "https://pics.paypal.com/v1/images/redDot.jpeg"
        },
        "SETTINGS": [
            {
                "FIELD_NAME": "ITEMS.DATE",
                "DISPLAY_PREFERENCE": {
                    "HIDDEN": true
                }
            },
            {
                "FIELD_NAME": "CUSTOM",
                "DISPLAY_PREFERENCE": {
                    "HIDDEN": true
                }
            }
        ]
    }
}

exports.invoice_template_json = invoice_template_json;
