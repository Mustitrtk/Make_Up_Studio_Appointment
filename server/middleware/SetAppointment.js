export default function (schema) {
    schema.pre('save', function (next) {
        if (this.DateTime) {
            this.DateTime.setSeconds(0);
            this.DateTime.setMilliseconds(0);
        }
        next();
    });
}
