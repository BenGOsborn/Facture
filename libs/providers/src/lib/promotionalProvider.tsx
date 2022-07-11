import { Modal, SubscribeMail } from "@facture/components";
import { usePromotion } from "@facture/hooks";

interface Props {
    children: any;
}

export function PromotionalProvider({ children }: Props) {
    const { visible, setVisible } = usePromotion();

    return (
        <>
            {children}
            {visible && (
                <Modal title="Mailing List" onClose={() => setVisible(false)}>
                    <SubscribeMail />
                </Modal>
            )}
        </>
    );
}

export default PromotionalProvider;
