import { Modal, SubscribeMail } from "@facture/components";

interface Props {
    children: any;
}

export function PromotionalProvider({ children }: Props) {
    return (
        <>
            {children}
            <Modal title="Mailing List" onClose={() => console.log("Hello World")}>
                <SubscribeMail />
            </Modal>
        </>
    );
}

export default PromotionalProvider;
