# -*- coding: utf-8 -*-
def t210691_1():
    """State 0"""
    while True:
        """State 1"""
        call = t210691_x3()
        assert IsClientPlayer() == 1
        """State 2"""
        call = t210691_x4()
        assert not IsClientPlayer()

def t210691_x0(actionbutton1=6013, flag1=6000, flag2=6001, flag3=6001, flag4=6001, flag5=6001, flag6=6001,
               flag7=6001):
    """State 0"""
    while True:
        """State 1"""
        assert (not GetOneLineHelpStatus() and not IsTalkingToSomeoneElse() and not IsClientPlayer()
                and not IsPlayerDead() and not IsCharacterDisabled())
        """State 3"""
        assert (GetEventStatus(flag1) == 1 or GetEventStatus(flag2) == 1 or GetEventStatus(flag3) ==
                1 or GetEventStatus(flag4) == 1 or GetEventStatus(flag5) == 1 or GetEventStatus(flag6)
                == 1 or GetEventStatus(flag7) == 1)
        """State 2"""
        def ExitPause():
            SetTalkTime(0.5)
        if (not GetEventStatus(flag1) and not GetEventStatus(flag2) and not GetEventStatus(flag3) and
            not GetEventStatus(flag4) and not GetEventStatus(flag5) and not GetEventStatus(flag6) and
            not GetEventStatus(flag7)):
            pass
        elif CheckActionButtonArea(actionbutton1):
            break
        elif (not (not GetOneLineHelpStatus() and not IsTalkingToSomeoneElse() and not IsClientPlayer()
              and not IsPlayerDead() and not IsCharacterDisabled())):
            pass
    """State 4"""
    return 0

def t210691_x1():
    """State 0"""
    if GetEventStatus(6710) == 1:
        pass
    else:
        """State 10"""
        OpenGenericDialog(1, 10011160, 1, 0, 1)
        """State 11"""
        SetEventState(6710, 1)
        SetTalkTime(0.33)
        assert not IsGenericDialogOpen()
    while True:
        """State 2"""
        ClearTalkListData()
        """State 3"""
        AddTalkListData(1, 15000140, -1)
        AddTalkListData(2, 15000141, -1)
        AddTalkListData(50, 15000005, -1)
        """State 9"""
        SetEventState(12105041, 1)
        """State 4"""
        ShowShopMessage(0, 0, 0)
        def WhilePaused():
            SetTalkTime(0.33)
        if (not GetTalkListEntryResult() or GetTalkListEntryResult() == 50 or not CheckSpecificPersonMenuIsOpen(300,
            0)):
            break
        elif GetTalkListEntryResult() == 1:
            """State 6"""
            DebugEvent('購入')
            if GetEventStatus(6603) == 1:
                """State 15"""
                OpenRegularShop(140000, 149999)
                def WhilePaused():
                    SetTalkTime(0.33)
                assert not CheckSpecificPersonMenuIsOpen(11, 0)
            elif GetEventStatus(9802) == 1:
                """State 14"""
                OpenRegularShop(130000, 139999)
                def WhilePaused():
                    SetTalkTime(0.33)
                assert not CheckSpecificPersonMenuIsOpen(11, 0)
            elif GetEventStatus(9801) == 1:
                """State 13"""
                OpenRegularShop(120000, 129999)
                def WhilePaused():
                    SetTalkTime(0.33)
                assert not CheckSpecificPersonMenuIsOpen(11, 0)
            elif GetEventStatus(9800) == 1:
                """State 12"""
                OpenRegularShop(110000, 119999)
                def WhilePaused():
                    SetTalkTime(0.33)
                assert not CheckSpecificPersonMenuIsOpen(11, 0)
            else:
                """State 1"""
                OpenRegularShop(100000, 109999)
                def WhilePaused():
                    SetTalkTime(0.33)
                assert not CheckSpecificPersonMenuIsOpen(11, 0)
        elif GetTalkListEntryResult() == 2:
            """State 5"""
            DebugEvent('売却')
            """State 8"""
            OpenSellShop(-1, -1)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not CheckSpecificPersonMenuIsOpen(64, 0)
    """State 7"""
    DebugEvent('立ち去る')
    """State 16"""
    return 0

def t210691_x2():
    """State 0,1"""
    ForceCloseMenu()
    """State 2"""
    return 0

def t210691_x3():
    """State 0"""
    while True:
        """State 3"""
        assert (t210691_x0(actionbutton1=6013, flag1=6000, flag2=6001, flag3=6001, flag4=6001, flag5=6001,
                flag6=6001, flag7=6001))
        """State 1"""
        call = t210691_x1()
        def ExitPause():
            SetEventState(12105041, 0)
        if call.Done():
            pass
        elif GetDistanceToPlayer() > 3:
            """State 2"""
            assert t210691_x2()
    """Unused"""
    """State 4"""
    return 0

def t210691_x4():
    """State 0,1"""
    DebugEvent('ゲスト待機')
    Quit()
    """Unused"""
    """State 2"""
    return 0

